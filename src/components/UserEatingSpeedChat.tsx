import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';
import { EATING_SPEED_ITEMS } from '@/consts';

type Props = {
  className?: string;
  value: string;
  disabled?: boolean;
};

export function UserEatingSpeedChat({ className, value }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <RadioGroup value={value}>
        <Stack direction="column">
          {EATING_SPEED_ITEMS.map(({ id, text }) => (
            <Radio key={id} value={id}>
              {text}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </ChatCard>
  );
}
