'use client';

import { useDisclosure } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';

import type { Chat } from '@/app/chat';
import { ChatList } from '@/components/ChatList';
import { Header } from '@/components/Header';
import { PreferenceModal } from '@/components/PreferenceModal';
import { SideMenu } from '@/components/SideMenu';

function Page() {
  const drawer = useDisclosure();
  const modal = useDisclosure();

  return (
    <>
      <Header title="ランチ君" onClickHistory={drawer.onOpen} onClickPreference={modal.onOpen} />
      <main className="min-h-screen ">
        <SideMenu isOpen={drawer.isOpen} onClose={drawer.onClose} />
        <ChatListWithState />
        <PreferenceModal isOpen={modal.isOpen} onClose={modal.onClose} />
      </main>
    </>
  );
}

function ChatListWithState() {
  const [chats, setChats] = useState<Chat[]>([]);
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
              value: '',
            },
          ],
    );
  }, []);

  return <ChatList chats={chats} />;
}

export default Page;
