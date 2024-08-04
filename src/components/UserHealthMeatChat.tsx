import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

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
          <Radio value="1">軽めにしたい</Radio>
          <Radio value="2">ガッツリ食べたい</Radio>
        </Stack>
      </RadioGroup>
    </ChatCard>
  );
}
