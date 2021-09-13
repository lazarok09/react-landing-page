import React from 'react';
import ReactDOM from 'react-dom';

import Home from './templates/App/Home';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
