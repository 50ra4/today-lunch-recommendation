import type { Chat } from '@/app/chat';

export const HISTORIES = [
  {
    id: '1',
    searchedAt: '2024-08-01',
    detail: '今日のおすすめのランチは...',
  },
  {
    id: '2',
    searchedAt: '2024-08-01',
    detail: '今日のおすすめのランチは...',
  },
  {
    id: '3',
    searchedAt: '2024-08-01',
    detail: '今日のおすすめのランチは...',
  },
];

export const CHATS: Chat[] = [
  {
    id: '1',
    type: 'RobotQuestion',
    question: 'あなたのランチにピッタリなお店を紹介します。',
  },
  {
    id: '2',
    type: 'RobotQuestion',
    question: 'ゆっくりご飯を食べる時間はありますか？',
  },
  {
    id: '3',
    type: 'UserEatingSpeed',
    value: '',
  },
  {
    id: '4',
    type: 'RobotQuestion',
    question: 'お連れ様の人数は？',
  },
  {
    id: '5',
    type: 'UserHowManyPeopleAnswer',
    value: '',
  },
  {
    id: '6',
    type: 'RobotQuestion',
    question: 'お腹は空いていますか？',
  },
  {
    id: '7',
    type: 'UserHealthMeatAnswer',
    value: '',
  },
  {
    id: '8',
    type: 'RobotQuestion',
    question: 'おしゃれなお店がいいですか？',
  },
  {
    id: '9',
    type: 'UserNiceRestaurantAnswer',
    value: '',
  },
  {
    id: '10',
    type: 'RobotQuestion',
    question: '今日の食べたいものを教えてください。',
  },
  {
    id: '11',
    type: 'UserFreeTextAnswer',
    value: '',
  },
  {
    id: '12',
    type: 'RobotQuestion',
    question: '以下の内容で検索します。よろしいでしょうか？',
  },
];
