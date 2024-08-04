import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';
import { HEALTH_MEAT_ITEMS } from '@/consts';

type Props = {
  className?: string;
  value: string;
  disabled?: boolean;
};

export function UserHealthMeatChat({ className, value }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <RadioGroup value={value}>
        <Stack direction="column">
          {HEALTH_MEAT_ITEMS.map(({ id, text }) => (
            <Radio key={id} value={id}>
              {text}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </ChatCard>
  );
}
