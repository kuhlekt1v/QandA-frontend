import React from 'react';
import { Question } from './Question';
import { QuestionData } from '../data/QuestionsData';

interface Props {
  data: QuestionData[];
}

/* Iterates through each question in QuestionData and
 * renders an <li> element for each item in array.
 */

export const QuestionList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((question) => (
        <li key={question.questionId}>
          <Question data={question} />
        </li>
      ))}
    </ul>
  );
};
