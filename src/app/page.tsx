'use client';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { Header } from '@/components/Header';
import { HistoryCard } from '@/components/HistoryCard';
import { PreferenceModal } from '@/components/PreferenceModal';
import { RobotChatCard } from '@/components/RobotChatCard';
import { CHATS, HISTORIES } from '@/mock';

export default function Home() {
  const drawer = useDisclosure();
  const modal = useDisclosure();

  return (
    <>
      <Header title="ランチ君" onClickHistory={drawer.onOpen} onClickPreference={modal.onOpen} />
      <main className="min-h-screen ">
        <Stack margin="8" spacing="4">
          {CHATS.map(({ id, question }) => (
            <RobotChatCard key={id} question={question} />
          ))}
        </Stack>
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
