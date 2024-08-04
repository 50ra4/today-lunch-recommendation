import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

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
          <Radio value="1">雰囲気の良いお店がいい</Radio>
          <Radio value="2">庶民的なお店がいい</Radio>
        </Stack>
      </RadioGroup>
    </ChatCard>
  );
}
