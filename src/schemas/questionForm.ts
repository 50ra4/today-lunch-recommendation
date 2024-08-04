import { z } from 'zod';

import { eatingSpeedSchema } from '@/schemas/eatingSpeed';
import { freeTextSchema } from '@/schemas/freeText';
import { healthMeatSchema } from '@/schemas/healthMeatChat';
import { howManyPeopleSchema } from '@/schemas/howManyPeople';
import { niceRestaurantSchema } from '@/schemas/niceRestaurant';

export const questionFormSchema = z.object({
  healthMeat: healthMeatSchema,
  howManyPeople: howManyPeopleSchema,
  niceRestaurant: niceRestaurantSchema,
  eatingSpeed: eatingSpeedSchema,
  freeText: freeTextSchema,
});

export type QuestionFormInput = z.infer<typeof questionFormSchema>;
export type QuestionForm = z.output<typeof questionFormSchema>;
