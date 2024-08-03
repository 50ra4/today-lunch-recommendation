type UserAnswerChat = {
  id: string;
  type: 'userAnswer';
  answer: string;
};
type RobotQuestionChat = {
  id: string;
  type: 'robotQuestion';
  question: string;
};

export type Chat = UserAnswerChat | RobotQuestionChat;
