import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignUp } from './Pages/SignUp';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <GlobalStyles/>
     <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)
