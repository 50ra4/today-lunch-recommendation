import { z } from 'zod';

export const freeTextSchema = z.string().max(100);

export type FreeTextInput = z.infer<typeof freeTextSchema>;
export type FreeText = z.output<typeof freeTextSchema>;
