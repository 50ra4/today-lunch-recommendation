import { Button, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { nanoid } from 'nanoid';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { Chat } from '@/app/chat';
import { RobotQuestionChat } from '@/components/RobotQuestionChat';
import { UserAnswerChat } from '@/components/UserAnswerChat';
import { UserEatingSpeedChat } from '@/components/UserEatingSpeedChat';
import { UserFreeTextChat } from '@/components/UserFreeTextChat';
import { UserHealthMeatChat } from '@/components/UserHealthMeatChat';
import { UserHowManyPeopleChat } from '@/components/UserHowManyPeopleChat';
import { UserNiceRestaurantChat } from '@/components/UserNiceRestaurantChat';
import { HEALTH_MEAT, HOW_MANY_PEOPLE, NICE_RESTAURANT, EATING_SPEED } from '@/consts';
import type { QuestionFormInput } from '@/schemas/questionForm';
import { questionFormSchema } from '@/schemas/questionForm';

export function ChatList() {
  const [chats, setChats] = useState<Chat[]>([]);

  // TODO: あとで修正する
  useForm<QuestionFormInput>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      healthMeat: HEALTH_MEAT.health,
      howManyPeople: HOW_MANY_PEOPLE.none,
      niceRestaurant: NICE_RESTAURANT.cheep,
      eatingSpeed: EATING_SPEED.slowly,
      freeText: '',
    },
  });

  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    setChats((prev) =>
      prev.length
        ? prev
        : [
            {
              id: nanoid(),
              type: 'RobotQuestion',
              question: 'あなたのランチにピッタリなお店を紹介します。',
            },
            {
              id: nanoid(),
              type: 'RobotQuestion',
              question: 'ゆっくりご飯を食べる時間はありますか？',
            },
            {
              id: nanoid(),
              type: 'UserEatingSpeed',
              value: EATING_SPEED.slowly,
            },
          ],
    );
  }, []);

  return (
    <div className="relative p-8">
      <Stack spacing="4">
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
      <Button className="absolute bottom-5 left-1/2 -translate-x-1/2" height={50}>
        次の回答へ
      </Button>
    </div>
  );
}
