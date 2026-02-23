import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(5000),
  captchaToken: z.string().trim().optional(),
});
