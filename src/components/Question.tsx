import React from 'react';
import { QuestionData } from '../data/QuestionsData';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent = true }: Props) => {
  return (
    <div>
      <div>{data.title}</div>
      {/* Truncate content if longer than 50 characters. */}
      {showContent && <div>{data.content.length > 50 ? `${data.content.substring(0, 50)}...` : data.content}</div>}

      <div>
        {`Asked by ${data.userName} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};
