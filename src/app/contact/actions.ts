'use server';

import { z } from 'zod';
import { initializeFirebase } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const { firestore } = initializeFirebase();

// Define the base schema with all possible fields, making conditional ones optional
const BaseEnquirySchema = z.object({
  name: z.string().min(2, 'Identity required (min 2 chars)'),
  email: z.string().email('Invalid digital mail address'),
  whatsapp: z.string().regex(/^[0-9+\s-]{10,15}$/, 'Invalid WhatsApp number format'),
  service: z.string().min(1, 'Please select a service of interest'),
  projectDetails: z.string().min(1, 'Mission brief cannot be empty'),

  // Conditional fields
  company: z.string().optional(),
  brideName: z.string().optional(),
  bridePhone: z.string().optional(),
  groomName: z.string().optional(),
  groomPhone: z.string().optional(),
  weddingVenue: z.string().optional(),
});

// Use superRefine for complex conditional validation
const EnquirySchema = BaseEnquirySchema.superRefine((data, ctx) => {
  const isWeddingService = data.service.startsWith('wedding-');

  if (isWeddingService) {
    // Validation for wedding services
    if (!data.brideName || data.brideName.length < 2) {
      ctx.addIssue({ code: 'custom', message: "Bride's name is required", path: ['brideName'] });
    }
    if (!data.bridePhone || !/^[0-9+\s-]{10,15}$/.test(data.bridePhone)) {
      ctx.addIssue({ code: 'custom', message: "Invalid bride's phone number", path: ['bridePhone'] });
    }
    if (!data.groomName || data.groomName.length < 2) {
      ctx.addIssue({ code: 'custom', message: "Groom's name is required", path: ['groomName'] });
    }
     if (!data.groomPhone || !/^[0-9+\s-]{10,15}$/.test(data.groomPhone)) {
      ctx.addIssue({ code: 'custom', message: "Invalid groom's phone number", path: ['groomPhone'] });
    }
    if (!data.weddingVenue || data.weddingVenue.length < 3) {
      ctx.addIssue({ code: 'custom', message: 'Wedding venue is required', path: ['weddingVenue'] });
    }
  } else {
    // Validation for non-wedding services
    if (!data.company || data.company.length < 1) {
      ctx.addIssue({ code: 'custom', message: 'Brand/Company name is required', path: ['company'] });
    }
  }
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
    brideName?: string[];
    bridePhone?: string[];
    groomName?: string[];
    groomPhone?: string[];
    weddingVenue?: string[];
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
