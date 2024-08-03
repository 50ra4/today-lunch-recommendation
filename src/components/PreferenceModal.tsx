import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function PreferenceModal({ isOpen, onClose }: Props) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>設定</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Spread Sheet URL</FormLabel>
            <Input ref={initialRef} placeholder="https://docs.google.com/spreadsheets/d/xxxxxxxxx" />
          </FormControl>

          <FormControl>
            <FormLabel>API endpoint</FormLabel>
            <Input placeholder="https://api.openai.com/v1/chat/completions" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>API key</FormLabel>
            <Input placeholder="" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="black" mr={3}>
            保存
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
