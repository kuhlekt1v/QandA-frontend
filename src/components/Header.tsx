/** @jsxImportSource @emotion/react */
import React from 'react';
import { UserIcon } from '../Icons';
import { useForm } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';

import { css } from '@emotion/react';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../Styles';

type FormData = {
  search: string;
};

export const Header = () => {
  const { register } = useForm<FormData>();
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get('critera') || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="./"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Q & A
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          {...register('search')}
          type="text"
          placeholder="Search..."
          defaultValue={criteria}
          css={css`
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: white;
            width: 200px;
            height: 30px;
            :focus {
              outline-color: ${gray5};
            }
            @-moz-document url-prefix() {
              :focus {
                outline-style: solid;
              }
            }
          `}
        />
      </form>
      <Link
        to="./signin"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: 5px 10px;
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          :focus {
            outline-color: ${gray5};
          }
          @-moz-document url-prefix() {
            :focus {
              outline-style: solid;
            }
          }
          span {
            margin-left: 7px;
          }
        `}
      >
        <UserIcon />
        <span>Sign In</span>
      </Link>
    </div>
  );
};
