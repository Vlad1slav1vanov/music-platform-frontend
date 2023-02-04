import React from 'react';
import {ThemeProvider} from '@mui/material';
import theme from './theme';
import MainLayout from './main-layout';
import './styles/index.scss';
import {BrowserRouter} from 'react-router-dom';
import Paths from './paths/Paths';

const App: React.FC = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<MainLayout>
				<Paths />
			</MainLayout>
		</ThemeProvider>
	</BrowserRouter>
);

export default App;
