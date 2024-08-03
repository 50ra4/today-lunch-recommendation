import { TimeIcon } from '@chakra-ui/icons';
import { Box, Flex, Container, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  title: string;
  onClickHistory?: () => void;
};

export function Header({ title, onClickHistory }: Props) {
  return (
    <Box px={4} bgColor="black">
      <Container maxW="container.lg">
        <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Heading as="h1" fontSize="2xl" cursor="pointer" color="white">
              {title}
            </Heading>
          </NextLink>
          <button aria-label="履歴を表示する" onClick={onClickHistory}>
            <TimeIcon color="white" />
          </button>
        </Flex>
      </Container>
    </Box>
  );
}
