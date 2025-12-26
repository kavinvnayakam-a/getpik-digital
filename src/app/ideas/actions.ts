'use server';

import { generateContentIdeas, type ContentIdeaInput } from '@/ai/flows/content-ideas';
import { z } from 'zod';

const InputSchema = z.object({
  contentType: z.string().min(1),
  industryKeywords: z.string().min(3, 'Please provide some keywords.'),
  targetAudience: z.string().optional(),
});

export async function generateIdeasAction(prevState: any, formData: FormData) {
  const validatedFields = InputSchema.safeParse({
    contentType: formData.get('contentType'),
    industryKeywords: formData.get('industryKeywords'),
    targetAudience: formData.get('targetAudience'),
  });

  if (!validatedFields.success) {
    return { message: validatedFields.error.errors.map(e => e.message).join(', ') };
  }

  try {
    const result = await generateContentIdeas(validatedFields.data as ContentIdeaInput);

    if (!result || !result.contentIdeas) {
      return { message: 'Failed to generate ideas. The AI core is busy.' };
    }

    // Ensure we return clean strings without AI formatting (1. or -)
    const cleanedIdeas = result.contentIdeas.map(idea => 
      idea.replace(/^(\d+\.|[*#-]\s*)/i, '').trim()
    );

    return {
      message: 'success',
      data: {
        contentIdeas: cleanedIdeas
      }
    };
  } catch (error) {
    console.error('IDEA_GEN_ERROR:', error);
    return { message: 'Neural processing error. Please try again.' };
  }
}