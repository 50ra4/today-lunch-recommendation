import { z } from 'zod';

import { NICE_RESTAURANT } from '@/consts';
import type { Values } from '@/utils';

export const niceRestaurantSchema = z
  .string()
  .min(1)
  .pipe(z.custom<Values<typeof NICE_RESTAURANT>>((v) => Object.values(NICE_RESTAURANT).includes(v)));

export type NiceRestaurantInput = z.infer<typeof niceRestaurantSchema>;
export type NiceRestaurant = z.output<typeof niceRestaurantSchema>;
