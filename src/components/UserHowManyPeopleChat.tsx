import { Select } from '@chakra-ui/react';

import { ChatCard } from '@/components/ChatCard';

type Props = {
  className?: string;
  value: string;
  disabled?: boolean;
};

export function UserHowManyPeopleChat({ className, value }: Props) {
  return (
    <ChatCard className={className} avatar="user">
      <Select value={value} placeholder="人数を選択">
        <option value="0">なし</option>
        <option value="1">1人</option>
        <option value="2">2人</option>
        <option value="3">3人以上</option>
      </Select>
    </ChatCard>
  );
}
