/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
