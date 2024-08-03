import { Card, CardHeader, Avatar, CardBody } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type Props = {
  className?: string;
  avatar: 'robot' | 'user';
  children: ReactNode;
};

export function ChatCard({ className, avatar, children }: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        {avatar === 'robot' ? (
          <Avatar name="Robot" src="https://bit.ly/sage-adebayo" />
        ) : (
          <Avatar name="User" src="https://bit.ly/sage-adebayo" />
        )}
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
