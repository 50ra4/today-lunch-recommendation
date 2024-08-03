'use client';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { ChatList } from '@/components/ChatList';
import { Header } from '@/components/Header';
import { HistoryCard } from '@/components/HistoryCard';
import { PreferenceModal } from '@/components/PreferenceModal';
import { CHATS, HISTORIES } from '@/mock';

export default function Home() {
  const drawer = useDisclosure();
  const modal = useDisclosure();

  return (
    <>
      <Header title="ランチ君" onClickHistory={drawer.onOpen} onClickPreference={modal.onOpen} />
      <main className="min-h-screen ">
        <ChatList chats={CHATS} />
        <Drawer onClose={drawer.onClose} isOpen={drawer.isOpen} size="md" placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>検索履歴</DrawerHeader>
            <DrawerBody>
              {HISTORIES.map(({ id, searchedAt, detail }) => (
                <HistoryCard key={id} id={id} searchedAt={searchedAt} detail={detail} />
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <PreferenceModal isOpen={modal.isOpen} onClose={modal.onClose} />
      </main>
    </>
  );
}
