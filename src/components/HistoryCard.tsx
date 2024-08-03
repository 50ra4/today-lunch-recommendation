import { Stack, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  className?: string;
  id: string;
  searchedAt: string;
  detail: string;
};

export function HistoryCard({ className, id, searchedAt, detail }: Props) {
  return (
    <Box className={className}>
      <Link href={`/post/${id}`}>
        <Text fontSize="xl" color="gray.500" mt="2">
          {searchedAt}
        </Text>
        <Text mt="1" fontSize="xl" color="gray.500">
          {detail}
        </Text>
        <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
      </Link>
    </Box>
  );
}
