/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import { useSearchParams } from 'react-router-dom';

import { Page } from '../components/Page';
import { QuestionList } from '../components/QuestionList';

import { searchQuestions, QuestionData } from '../data/QuestionsData';

export const SearchPage = () => {
  // searchParams object contains a method to get value of URL query param.
  const [searchParams] = useSearchParams();
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);

  // Value of 'criteria' query parameter.
  const search = searchParams.get('criteria') || '';
  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      setQuestions(foundResults);
    };
    doSearch(search);
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
