import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import './styles/index.scss';

const Header: React.FC = () => (
	<AppBar>
		<Toolbar>
			<div className='header-wrapper'>
				<Typography variant='h5'>
        Music Platform
				</Typography>
				<div className='user-block'>
					<Button
						variant='outlined'
						color='inherit'
					>
          Войти
					</Button>
					<Button
						variant='contained'
						color='secondary'
					>
          Регистрация
					</Button>
				</div>
			</div>
		</Toolbar>
	</AppBar>
);

export default Header;
