import React from 'react';
import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { QuestionList } from '../components/QuestionList';
import { getUnansweredQuestions, QuestionData } from '../data/QuestionsData';

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
      <div>
        <PageTitle>Unanwswered Questions</PageTitle>
        <button onClick={handleAskQuestionClick}>Ask a question</button>
      </div>
      {questionsLoading ? <div>Loading...</div> : <QuestionList data={questions || []} />}
    </Page>
  );
};
