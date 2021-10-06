import React from 'react';
import { QuestionData } from '../data/QuestionsData';

interface Props {
  data: QuestionData;
}

export const Question = ({ data }: Props) => {
  return (
    <div>
      <div>{data.title}</div>
      <div>
        {`Asked by ${data.userName} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};
