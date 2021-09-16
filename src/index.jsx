import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Home from './templates/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
