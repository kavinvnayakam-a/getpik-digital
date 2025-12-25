'use server';

import { z } from 'zod';

const EnquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  projectDetails: z
    .string()
    .min(10, 'Please provide some details about your project.'),
  budget: z.string().optional(),
});

type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    projectDetails?: string[];
    budget?: string[];
  };
};

export async function submitEnquiryAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = EnquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    projectDetails: formData.get('projectDetails'),
    budget: formData.get('budget'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to submit enquiry. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would save this to a database (e.g., Firestore).
  console.log('New Enquiry Submitted:', validatedFields.data);

  return { message: 'success' };
}
