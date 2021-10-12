/** @jsxImportSource @emotion/react */
import React from 'react';
import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { QuestionList } from '../components/QuestionList';
import { getUnansweredQuestions, QuestionData } from '../data/QuestionsData';

import { css } from '@emotion/react';
import { PrimaryButton } from '../Styles';

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);

  /* You can't specify async callback in useEffect, but you can create
   *  a function that calls an asynchronous function.
   */

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    console.log('TODO - move to the AskPage');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanwswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>Ask a question</PrimaryButton>
      </div>
      {questionsLoading ? <div>Loading...</div> : <QuestionList data={questions || []} />}
    </Page>
  );
};
