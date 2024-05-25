import * as z from 'zod';

const IMG_MAX_LIMIT = 3;

const imageFormSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string()
});

export { IMG_MAX_LIMIT, imageFormSchema };
