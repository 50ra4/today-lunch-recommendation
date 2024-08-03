import { Stack } from '@chakra-ui/react';

import type { Chat } from '@/app/chat';
import { RobotQuestionChat } from '@/components/RobotQuestionChat';
import { UserAnswerChat } from '@/components/UserAnswerChat';

type Props = {
  chats: Chat[];
};

export function ChatList({ chats }: Props) {
  return (
    <Stack margin="8" spacing="4">
      {chats.map((chat) => {
        switch (chat.type) {
          case 'robotQuestion': {
            return <RobotQuestionChat className="mr-4" key={chat.id} question={chat.question} />;
          }
          case 'userAnswer': {
            return <UserAnswerChat className="ml-4" key={chat.id} answer={chat.answer} />;
          }
          default:
            return null;
        }
      })}
    </Stack>
  );
}
