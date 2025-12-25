'use server';

import {
  generateContentIdeas,
  type ContentIdeasInput,
  type ContentIdeasOutput,
} from '@/ai/flows/content-ideas';
import { z } from 'zod';

const InputSchema = z.object({
  industryKeywords: z.string().min(3, 'Please enter some keywords.'),
  contentType: z.string(),
  targetAudience: z.string().optional(),
});

type FormState = {
  message: string;
  data?: ContentIdeasOutput;
};

export async function generateIdeasAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = InputSchema.safeParse({
    industryKeywords: formData.get('industryKeywords'),
    contentType: formData.get('contentType'),
    targetAudience: formData.get('targetAudience'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  try {
    const result = await generateContentIdeas(
      validatedFields.data as ContentIdeasInput
    );
    if (!result || !result.contentIdeas || result.contentIdeas.length === 0) {
      return {
        message:
          'The AI could not generate ideas. Please try again with different keywords.',
      };
    }
    return { message: 'success', data: result };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating ideas. Please try again.',
    };
  }
}
