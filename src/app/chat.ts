type UserAnswerChat = {
  id: string;
  type: 'UserAnswer';
  answer: string;
};
type UserEatingSpeedAnswerChat = {
  id: string;
  type: 'UserEatingSpeed';
  value: string;
};
type UserFreeTextAnswerChat = {
  id: string;
  type: 'UserFreeTextAnswer';
  value: string;
};
type UserHealthMeatAnswerChat = {
  id: string;
  type: 'UserHealthMeatAnswer';
  value: string;
};
type UserHowManyPeopleAnswerChat = {
  id: string;
  type: 'UserHowManyPeopleAnswer';
  value: string;
};
type UserNiceRestaurantAnswerChat = {
  id: string;
  type: 'UserNiceRestaurantAnswer';
  value: string;
};

type RobotQuestionChat = {
  id: string;
  type: 'RobotQuestion';
  question: string;
};
export type Chat =
  | UserAnswerChat
  | UserEatingSpeedAnswerChat
  | UserFreeTextAnswerChat
  | UserHealthMeatAnswerChat
  | UserHowManyPeopleAnswerChat
  | UserNiceRestaurantAnswerChat
  | RobotQuestionChat;
