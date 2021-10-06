import React from 'react';
import { QuestionList } from '../components/QuestionList';
import { getUnansweredQuestions } from '../data/QuestionsData';

export const HomePage = () => {
  return (
    <div>
      <div>
        <h2>Unanswered Questions</h2>
        <button>Ask a question</button>
      </div>
      <QuestionList data={getUnansweredQuestions()} />
    </div>
  );
};
