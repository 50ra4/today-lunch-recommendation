import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';

import { HistoryCard } from '@/components/HistoryCard';
import { HISTORIES } from '@/mock';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export function SideMenu({ onClose, isOpen }: Props) {
  return (
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
  );
}
