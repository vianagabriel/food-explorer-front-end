import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes/index';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';
import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
     <Routes/>
    </AuthProvider>
  </ThemeProvider>
)

