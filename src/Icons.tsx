/** @jsxImportSource @emotion/react */
import React from 'react';
import user from './images/user.svg';

import { css } from '@emotion/react';

export const UserIcon = () => (
  <img
    src={user}
    alt="Users"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
