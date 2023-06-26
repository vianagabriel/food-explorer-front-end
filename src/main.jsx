import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './router/index';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes/>
  </ThemeProvider>
)
