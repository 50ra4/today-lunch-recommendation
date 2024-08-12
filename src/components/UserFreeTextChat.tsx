import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

type Props = {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export function UserFreeTextChat({ className, value }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <FormControl>
        <FormLabel>食べたいもの</FormLabel>
        <Input value={value} placeholder="肉。ステーキ。" />
      </FormControl>
    </ChatCard>
  );
}
