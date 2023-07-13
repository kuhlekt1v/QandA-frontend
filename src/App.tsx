/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { SignInPage } from './pages/SignInPage';
import { QuestionPage } from './pages/QuestionPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { Header } from './components/Header';

const AskPage = React.lazy(() => import('./pages/AskPage'));

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route
            path="ask"
            element={
              <React.Suspense
                fallback={
                  <div
                    css={css`
                      margin-top: 100px;
                      text-align: center;
                    `}
                  >
                    Loading...
                  </div>
                }
              >
                <AskPage />
              </React.Suspense>
            }
          />
          <Route path="signin" element={<SignInPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
