import { Card, CardHeader, Avatar, CardBody, Text } from '@chakra-ui/react';

type Props = {
  className?: string;
  question: string;
};

export function RobotChatCard({ className, question }: Props) {
  return (
    <Card className={className} maxW="md">
      <CardHeader>
        <Avatar name="Robot" src="https://bit.ly/sage-adebayo" />
      </CardHeader>
      <CardBody>
        <Text>{question}</Text>
      </CardBody>
    </Card>
  );
}
