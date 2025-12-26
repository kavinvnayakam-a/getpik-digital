'use server';

import { z } from 'zod';

// 1. Define the validation schema matching our new UI fields
const EnquirySchema = z.object({
  name: z.string().min(2, 'Identity required (min 2 chars)'),
  email: z.string().email('Invalid digital mail address'),
  company: z.string().min(1, 'Brand/Company name is required'),
  whatsapp: z.string().regex(/^[0-9+\s-]{10,15}$/, 'Invalid WhatsApp number format'),
  budget: z.string().min(1, 'Please select an investment range'),
  projectDetails: z.string().min(10, 'Mission brief is too short (min 10 chars)'),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    whatsapp?: string[];
    budget?: string[];
    projectDetails?: string[];
  };
};

export async function submitEnquiryAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 2. Extract and Validate fields
  const validatedFields = EnquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    whatsapp: formData.get('whatsapp'),
    budget: formData.get('budget'),
    projectDetails: formData.get('projectDetails'),
  });

  // 3. Handle Validation Errors
  if (!validatedFields.success) {
    return {
      message: 'Protocol Error: Please check the highlighted fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, company, whatsapp, budget, projectDetails } = validatedFields.data;

  try {
    /**
     * 4. DATA PROCESSING LOGIC
     * Here you would typically:
     * - Save to Database (Prisma/Supabase)
     * - Send an email (Resend/Nodemailer)
     * - Trigger a WhatsApp API notification
     */
    
    console.log('--- NEW INQUIRY RECEIVED ---');
    console.log(`Identity: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Brand: ${company}`);
    console.log(`WhatsApp: ${whatsapp}`);
    console.log(`Budget: ${budget}`);
    console.log(`Brief: ${projectDetails}`);

    // Simulate network delay for the "Neural" feel
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      message: 'success',
    };

  } catch (error) {
    console.error('TRANSMISSION_FAILED:', error);
    return {
      message: 'Signal Lost: Our servers encountered an error. Please retry.',
    };
  }
}