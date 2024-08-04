import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

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
          <Radio value="1">ゆっくり食べたい</Radio>
          <Radio value="2">サクッと食べたい</Radio>
        </Stack>
      </RadioGroup>
    </ChatCard>
  );
}
