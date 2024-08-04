import { z } from 'zod';

import { HEALTH_MEAT } from '@/consts';
import type { Values } from '@/utils';

export const healthMeatSchema = z
  .string()
  .min(1)
  .pipe(z.custom<Values<typeof HEALTH_MEAT>>((v) => Object.values(HEALTH_MEAT).includes(v)));

export type EatingSpeedInput = z.infer<typeof healthMeatSchema>;
export type EatingSpeed = z.output<typeof healthMeatSchema>;
