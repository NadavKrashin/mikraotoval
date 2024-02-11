export type QuestionOption = {
  id: number;
  text: string;
  isCorrect: boolean;
  color?: string;
};

export type PropsType = {
  questionTitle: string;
  questionOptions: QuestionOption[];
  isMultipleChoice: boolean;
};
