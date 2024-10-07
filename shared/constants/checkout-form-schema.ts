import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'The name must contain at least 2 characters' }),
  lastName: z.string().min(2, { message: 'The last name must contain at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  address: z.string().min(5, { message: 'Please enter a valid address' }),
  comment: z.string().optional(),
});

export const paymentFormSchema = z.object({
  accountNumber: z
    .string()
    .min(16, { message: 'The account number must contain at least 16 characters' }),
  expiringDate: z
    .string()
    .min(4, { message: 'The expiring date must contain at least 5 characters.' }),
  cvv: z.string().min(3, { message: 'The cvv must contain at least 5 characters.' }),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
export type PaymentFormValues = z.infer<typeof paymentFormSchema>;
