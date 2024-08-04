import { Stack } from '@chakra-ui/react';

import type { Chat } from '@/app/chat';
import { RobotQuestionChat } from '@/components/RobotQuestionChat';
import { UserAnswerChat } from '@/components/UserAnswerChat';
import { UserEatingSpeedChat } from '@/components/UserEatingSpeedChat';
import { UserFreeTextChat } from '@/components/UserFreeTextChat';
import { UserHealthMeatChat } from '@/components/UserHealthMeatChat';
import { UserHowManyPeopleChat } from '@/components/UserHowManyPeopleChat';
import { UserNiceRestaurantChat } from '@/components/UserNiceRestaurantChat';

type Props = {
  chats: Chat[];
};

export function ChatList({ chats }: Props) {
  return (
    <Stack margin="8" spacing="4">
      {chats.map((chat, i) => {
        const isLast = i === chats.length;

        switch (chat.type) {
          case 'RobotQuestion': {
            return <RobotQuestionChat className="mr-8" key={chat.id} question={chat.question} />;
          }
          case 'UserAnswer': {
            return <UserAnswerChat className="ml-8" key={chat.id} answer={chat.answer} />;
          }
          case 'UserEatingSpeed': {
            return <UserEatingSpeedChat className="ml-8" key={chat.id} value={chat.value} disabled={!isLast} />;
          }
          case 'UserFreeTextAnswer': {
            return <UserFreeTextChat className="ml-8" key={chat.id} value={chat.value} disabled={!isLast} />;
          }
          case 'UserHealthMeatAnswer': {
            return <UserHealthMeatChat className="ml-8" key={chat.id} value={chat.value} disabled={!isLast} />;
          }
          case 'UserHowManyPeopleAnswer': {
            return <UserHowManyPeopleChat className="ml-8" key={chat.id} value={chat.value} disabled={!isLast} />;
          }
          case 'UserNiceRestaurantAnswer': {
            return <UserNiceRestaurantChat className="ml-8" key={chat.id} value={chat.value} disabled={!isLast} />;
          }
          default:
            throw new Error(`unknown chat type!`);
        }
      })}
    </Stack>
  );
}
