import { Select } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';
import { HOW_MANY_PEOPLE_ITEMS } from '@/consts';

type Props = {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export function UserHowManyPeopleChat({ className, value }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <Select value={value} placeholder="人数を選択">
        {HOW_MANY_PEOPLE_ITEMS.map(({ id, text }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </Select>
    </ChatCard>
  );
}
