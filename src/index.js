import React from 'react';
import ReactDOM from 'react-dom';
import App from './templates/App/App';

import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
