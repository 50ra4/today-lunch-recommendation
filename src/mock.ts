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
    type: 'robotQuestion',
    question: '今日のおすすめのランチは...',
  },
  {
    id: '2',
    type: 'userAnswer',
    answer: '答えは...',
  },
  {
    id: '3',
    type: 'robotQuestion',
    question: '今日のおすすめのランチは...',
  },
  {
    id: '4',
    type: 'userAnswer',
    answer: '答えは...',
  },
];
