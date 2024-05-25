import * as z from 'zod';

const userFormSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' })
});

export { userFormSchema };
