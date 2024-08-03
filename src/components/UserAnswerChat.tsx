import { Text } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

type Props = {
  className?: string;
  answer: string;
};

export function UserAnswerChat({ className, answer }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <Text>{answer}</Text>
    </ChatCard>
  );
}
