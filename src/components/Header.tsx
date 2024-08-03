import { SettingsIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, Flex, Container, Heading, IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  title: string;
  onClickHistory?: () => void;
  onClickPreference?: () => void;
};

export function Header({ title, onClickHistory, onClickPreference }: Props) {
  return (
    <Box px={4} bgColor="black">
      <Container maxW="container.lg">
        <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Heading as="h1" fontSize="2xl" cursor="pointer" color="white">
              {title}
            </Heading>
          </NextLink>
          <div>
            <IconButton
              bgColor="transparent"
              marginRight="4"
              aria-label="履歴を表示する"
              onClick={onClickHistory}
              icon={<TimeIcon color="white" />}
            />
            <IconButton
              bgColor="transparent"
              aria-label="設定を変更する"
              onClick={onClickPreference}
              icon={<SettingsIcon color="white" />}
            />
          </div>
        </Flex>
      </Container>
    </Box>
  );
}
