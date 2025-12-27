'use server';

import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

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
  const validatedFields = EnquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    whatsapp: formData.get('whatsapp'),
    budget: formData.get('budget'),
    projectDetails: formData.get('projectDetails'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Protocol Error: Please check the highlighted fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const newEnquiry = {
    ...validatedFields.data,
    createdAt: serverTimestamp(),
  };

  try {
    const enquiriesCollection = collection(firestore, 'enquiries');
    await addDoc(enquiriesCollection, newEnquiry);

    return {
      message: 'success',
    };

  } catch (error) {
    console.error('DATABASE_WRITE_FAILED:', error);
    return {
      message: 'Signal Lost: Our servers encountered an error. Please retry.',
    };
  }
}
