'use client';

import { useDisclosure } from '@chakra-ui/react';

import { ChatList } from '@/components/ChatList';
import { Header } from '@/components/Header';
import { PreferenceModal } from '@/components/PreferenceModal';
import { SideMenu } from '@/components/SideMenu';
import { CHATS } from '@/mock';

export default function Home() {
  const drawer = useDisclosure();
  const modal = useDisclosure();

  return (
    <>
      <Header title="ランチ君" onClickHistory={drawer.onOpen} onClickPreference={modal.onOpen} />
      <main className="min-h-screen ">
        <ChatList chats={CHATS} />
        <SideMenu isOpen={drawer.isOpen} onClose={drawer.onClose} />
        <PreferenceModal isOpen={modal.isOpen} onClose={modal.onClose} />
      </main>
    </>
  );
}
