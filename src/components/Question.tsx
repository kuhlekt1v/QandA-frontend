/** @jsxImportSource @emotion/react */
import React from 'react';
import { QuestionData } from '../data/QuestionsData';

import { css } from '@emotion/react';
import { gray2, gray3 } from '../Styles';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent = true }: Props) => {
  return (
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <div
        css={css`
          padding: 10px 0px;
          font-size: 19px;
        `}
      >
        {data.title}
      </div>
      {/* Truncate content if longer than 50 characters. */}
      {showContent && (
        <div
          css={css`
            padding-bottom: 10px;
            font-size: 15px;
            color: ${gray2};
          `}
        >
          {data.content.length > 50 ? `${data.content.substring(0, 50)}...` : data.content}
        </div>
      )}

      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >
        {`Asked by ${data.userName} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};
