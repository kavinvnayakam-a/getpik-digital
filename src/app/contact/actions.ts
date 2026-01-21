'use server';

import { z } from 'zod';
import { initializeFirebase } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const { firestore } = initializeFirebase();

// Define the schema for validation
const EnquirySchema = z.object({
  name: z.string().min(2, 'Identity required (min 2 chars)'),
  email: z.string().email('Invalid digital mail address'),
  company: z.string().min(1, 'Brand/Company name is required'),
  whatsapp: z.string().regex(/^[0-9+\s-]{10,15}$/, 'Invalid WhatsApp number format'),
  service: z.string().min(1, 'Please select a service of interest'),
  projectDetails: z.string().min(1, 'Mission brief cannot be empty'),
});

// Define the return type for the form state
export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    whatsapp?: string[];
    service?: string[];
    projectDetails?: string[];
  };
};

/**
 * Server Action to handle the Enquiry Form submission
 */
export async function submitEnquiryAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Extract and Validate fields
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = EnquirySchema.safeParse(rawFormData);

  // 2. Return errors early if validation fails
  if (!validatedFields.success) {
    return {
      message: 'Protocol Error: Please check the highlighted fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // 3. Prepare data for Firestore
    const newEnquiry = {
      ...validatedFields.data,
      // Metadata for your internal tracking
      status: 'unread',
      source: 'web_contact_form',
      createdAt: serverTimestamp(),
    };

    // 4. Write to Firestore
    // Ensure 'enquiries' is the name of your collection in Firebase
    const enquiriesCollection = collection(firestore, 'enquiries');
    await addDoc(enquiriesCollection, newEnquiry);

    // 5. Return success state
    return {
      message: 'success',
      errors: {},
    };

  } catch (error) {
    // Log the error on the server for debugging
    console.error('DATABASE_WRITE_FAILED:', error);

    // Return a user-friendly error message
    return {
      message: 'Signal Lost: Our servers encountered an error connecting to the database. Please retry.',
      errors: {},
    };
  }
}
