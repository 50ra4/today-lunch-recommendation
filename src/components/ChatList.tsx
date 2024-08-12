import { Button, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { nanoid } from 'nanoid';
import { useState, useRef, useEffect } from 'react';
import type { UseFormGetValues } from 'react-hook-form';
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

const useNextButton = (
  getValues: UseFormGetValues<QuestionFormInput>,
  setChats: (fn: (prev: Chat[]) => Chat[]) => void,
  chat?: Chat,
): { label: string; onClick: () => void } => {
  if (!chat) {
    return { label: '次へ', onClick: () => {} };
  }

  const label = '次の回答へ';
  switch (chat.type) {
    case 'RobotQuestion':
    case 'UserAnswer': {
      return { label, onClick: () => {} };
    }
    case 'UserEatingSpeed': {
      return {
        label,
        onClick: () => {
          setChats((prev) => {
            const updated = prev.slice(0, prev.length - 1);
            return [
              ...updated,
              { ...chat, value: getValues('eatingSpeed') },
              {
                id: nanoid(),
                type: 'RobotQuestion',
                question: 'お連れ様の人数は？',
              },
              {
                id: nanoid(),
                type: 'UserHowManyPeopleAnswer',
                value: getValues('howManyPeople'),
              },
            ];
          });
        },
      };
    }
    case 'UserHowManyPeopleAnswer': {
      return {
        label,
        onClick: () => {
          setChats((prev) => {
            const updated = prev.slice(0, prev.length - 1);
            return [
              ...updated,
              { ...chat, value: getValues('howManyPeople') },
              {
                id: nanoid(),
                type: 'RobotQuestion',
                question: 'ガッツリ食べたい気分ですか？',
              },
              {
                id: nanoid(),
                type: 'UserHealthMeatAnswer',
                value: getValues('healthMeat'),
              },
            ];
          });
        },
      };
    }

    case 'UserHealthMeatAnswer': {
      return {
        label,
        onClick: () => {
          setChats((prev) => {
            const updated = prev.slice(0, prev.length - 1);
            return [
              ...updated,
              { ...chat, value: getValues('healthMeat') },
              {
                id: nanoid(),
                type: 'RobotQuestion',
                question: 'おしゃれなレストランがいいですか？',
              },
              {
                id: nanoid(),
                type: 'UserNiceRestaurantAnswer',
                value: getValues('niceRestaurant'),
              },
            ];
          });
        },
      };
    }

    case 'UserNiceRestaurantAnswer': {
      return {
        label,
        onClick: () => {
          setChats((prev) => {
            const updated = prev.slice(0, prev.length - 1);
            return [
              ...updated,
              { ...chat, value: getValues('niceRestaurant') },
              {
                id: nanoid(),
                type: 'RobotQuestion',
                question: '食べたいものや好みのものを教えてください。',
              },
              {
                id: nanoid(),
                type: 'UserFreeTextAnswer',
                value: getValues('freeText'),
              },
            ];
          });
        },
      };
    }

    case 'UserFreeTextAnswer': {
      return {
        label,
        onClick: () => {
          setChats((prev) => {
            const updated = prev.slice(0, prev.length - 1);
            return [
              ...updated,
              { ...chat, value: getValues('freeText') },
              {
                id: nanoid(),
                type: 'RobotQuestion',
                question: 'FIXME:',
              },
              {
                id: nanoid(),
                type: 'UserHealthMeatAnswer',
                value: getValues('healthMeat'),
              },
            ];
          });
        },
      };
    }

    default:
      throw new Error(`unknown chat type!`);
  }
};

export function ChatList() {
  const [chats, setChats] = useState<Chat[]>([]);

  // TODO: あとで修正する
  const { getValues } = useForm<QuestionFormInput>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      healthMeat: HEALTH_MEAT.health,
      howManyPeople: HOW_MANY_PEOPLE.none,
      niceRestaurant: NICE_RESTAURANT.cheep,
      eatingSpeed: EATING_SPEED.slowly,
      freeText: '',
    },
  });

  const button = useNextButton(getValues, setChats, chats.at(-1));

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
      <Button className="absolute bottom-5 left-1/2 -translate-x-1/2" height={50} onClick={() => button.onClick()}>
        {button.label}
      </Button>
    </div>
  );
}
