'use server';

import {
  seoAnalysisAndSuggestions,
  type SEOAnalysisInput,
  type SEOAnalysisOutput,
} from '@/ai/flows/seo-analysis';
import { z } from 'zod';

const InputSchema = z.object({
  websiteUrl: z.string().url('Please enter a valid URL.'),
  keywords: z.string().min(3, 'Please enter some keywords.'),
});

type FormState = {
  message: string;
  data?: SEOAnalysisOutput;
};

export async function analyzeSeoAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = InputSchema.safeParse({
    websiteUrl: formData.get('websiteUrl'),
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors.map(e => e.message).join(', '),
    };
  }

  try {
    const result = await seoAnalysisAndSuggestions(
      validatedFields.data as SEOAnalysisInput
    );
    if (!result || !result.analysisSummary) {
      return {
        message:
          'The AI could not analyze the website. Please check the URL and try again.',
      };
    }
    return { message: 'success', data: result };
  } catch (error) {
    console.error(error);
    return {
      message:
        'An error occurred during analysis. The URL may be inaccessible or invalid.',
    };
  }
}
