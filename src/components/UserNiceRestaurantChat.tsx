import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';
import { NICE_RESTAURANT_ITEMS } from '@/consts';

type Props = {
  className?: string;
  value: string;
  disabled?: boolean;
};

export function UserNiceRestaurantChat({ className, value }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <RadioGroup value={value}>
        <Stack direction="column">
          {NICE_RESTAURANT_ITEMS.map(({ id, text }) => (
            <Radio key={id} value={id}>
              {text}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </ChatCard>
  );
}
