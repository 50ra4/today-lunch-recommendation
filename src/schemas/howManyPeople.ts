import { z } from 'zod';

import { HOW_MANY_PEOPLE } from '@/consts';
import type { Values } from '@/utils';

export const howManyPeopleSchema = z
  .string()
  .min(1)
  .pipe(z.custom<Values<typeof HOW_MANY_PEOPLE>>((v) => Object.values(HOW_MANY_PEOPLE).includes(v)));

export type HowManyPeopleInput = z.infer<typeof howManyPeopleSchema>;
export type HowManyPeople = z.output<typeof howManyPeopleSchema>;
