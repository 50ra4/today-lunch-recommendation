import { z } from 'zod';

import { EATING_SPEED } from '@/consts';
import type { Values } from '@/utils';

export const eatingSpeedSchema = z
  .string()
  .min(1)
  .pipe(z.custom<Values<typeof EATING_SPEED>>((v) => Object.values(EATING_SPEED).includes(v)));

export type EatingSpeedInput = z.infer<typeof eatingSpeedSchema>;
export type EatingSpeed = z.output<typeof eatingSpeedSchema>;
