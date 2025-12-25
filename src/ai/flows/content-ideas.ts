// src/ai/flows/content-ideas.ts
'use server';
/**
 * @fileOverview A content generation AI agent for marketing managers.
 *
 * - generateContentIdeas - A function that generates content ideas.
 * - ContentIdeasInput - The input type for the generateContentIdeas function.
 * - ContentIdeasOutput - The return type for the generateContentIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentIdeasInputSchema = z.object({
  industryKeywords: z
    .string()
    .describe(
      'Industry keywords to incorporate into content ideas. Separate keywords with commas.'
    ),
  contentType: z
    .string()
    .describe(
      'The type of content to generate ideas for (e.g., blog posts, website descriptions, client outreach).'
    ),
  targetAudience: z
    .string()
    .optional()
    .describe('The target audience for the content.'),
});
export type ContentIdeasInput = z.infer<typeof ContentIdeasInputSchema>;

const ContentIdeasOutputSchema = z.object({
  contentIdeas: z
    .array(z.string())
    .describe('An array of content ideas based on the input.'),
});
export type ContentIdeasOutput = z.infer<typeof ContentIdeasOutputSchema>;

export async function generateContentIdeas(
  input: ContentIdeasInput
): Promise<ContentIdeasOutput> {
  return contentIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentIdeasPrompt',
  input: {schema: ContentIdeasInputSchema},
  output: {schema: ContentIdeasOutputSchema},
  prompt: `You are a marketing expert specializing in content creation.

You will generate content ideas for the specified content type, incorporating the provided industry keywords.

Consider the target audience when generating ideas.

Industry Keywords: {{{industryKeywords}}}
Content Type: {{{contentType}}}
Target Audience: {{{targetAudience}}}

Content Ideas:`,
});

const contentIdeasFlow = ai.defineFlow(
  {
    name: 'contentIdeasFlow',
    inputSchema: ContentIdeasInputSchema,
    outputSchema: ContentIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
