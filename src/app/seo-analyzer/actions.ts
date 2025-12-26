'use server';

import { z } from 'zod';

const SeoSchema = z.object({
  url: z.string().url('A valid URL protocol is required (e.g., https://)'),
});

export type SeoState = {
  message: string;
  errors?: {
    url?: string[];
  };
  data?: {
    score: number;
    debt: 'Low' | 'Medium' | 'High';
    visibility: string;
  };
};

export async function analyzeSeoAction(
  prevState: SeoState,
  formData: FormData
): Promise<SeoState> {
  const validatedFields = SeoSchema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid URL Protocol',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const targetUrl = validatedFields.data.url;

  try {
    // 1. SIMULATE NEURAL SCAN DELAY
    // This gives the user the feeling of a real technical audit happening
    await new Promise((resolve) => setTimeout(resolve, 2500));

    /**
     * 2. REAL INTEGRATION POINT
     * In a production app, you would fetch data from:
     * - Google PageSpeed Insights API
     * - Ahrefs/Semrush API
     * - Custom Cheerio/Puppeteer scraper
     */

    console.log(`--- SEO AUDIT INITIALIZED FOR: ${targetUrl} ---`);

    return {
      message: 'success',
      data: {
        score: Math.floor(Math.random() * (98 - 75 + 1)) + 75, // Simulated score
        debt: 'Low',
        visibility: '+14.2%',
      },
    };
  } catch (error) {
    console.error('SCAN_FAILED:', error);
    return {
      message: 'Neural Link Interrupted. Please check the URL and try again.',
    };
  }
}