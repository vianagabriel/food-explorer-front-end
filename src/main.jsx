import React from 'react';
import ReactDOM from 'react-dom/client';
import { Details } from './Pages/Details';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Details />
  </ThemeProvider>
)
