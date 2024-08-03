import { Text } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

type Props = {
  className?: string;
  question: string;
};

export function RobotQuestionChat({ className, question }: Props) {
  return (
    <ChatCard className={className} avatar="robot">
      <Text>{question}</Text>
    </ChatCard>
  );
}
