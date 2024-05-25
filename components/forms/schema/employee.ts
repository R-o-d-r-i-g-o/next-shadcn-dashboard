import * as z from 'zod';
import { IMG_MAX_LIMIT, ImgSchema } from './image';

const employeeFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Product Name must be at least 3 characters' }),
  imgUrl: z
    .array(ImgSchema)
    .max(IMG_MAX_LIMIT, { message: 'You can only add up to 3 images' })
    .min(1, { message: 'At least one image must be added.' }),
  description: z
    .string()
    .min(3, { message: 'Product description must be at least 3 characters' }),
  price: z.coerce.number(),
  category: z.string().min(1, { message: 'Please select a category' })
});

export { employeeFormSchema as formSchema };
