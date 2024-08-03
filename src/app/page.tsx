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

import { Header } from '@/components/Header';
import { HistoryCard } from '@/components/HistoryCard';
import { HISTORIES } from '@/histories.mock';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header title="ランチ君" onClickHistory={isOpen ? onClose : onOpen} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="left">
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
      </main>
    </>
  );
}
