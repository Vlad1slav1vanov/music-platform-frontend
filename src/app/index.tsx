import React, { useEffect } from 'react';
import {ThemeProvider} from '@mui/material';
import theme from './theme';
import MainLayout from './main-layout';
import './styles/index.scss';
import {BrowserRouter} from 'react-router-dom';
import Paths from './paths/Paths';
import userStore from 'shared/user-store';

const App: React.FC = () => {
  React.useEffect(() => {
    userStore.authUser()
  }, [])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Paths />
        </MainLayout>
      </ThemeProvider>
	  </BrowserRouter>
  )
};

export default App;
