import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/index.scss';

const Header: React.FC = () => {
	const navigate = useNavigate();
	return (
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
							onClick={() => {
								navigate('/login');
							}}
						>
              Войти
						</Button>
						<Button
							variant='contained'
							color='secondary'
							onClick={() => {
								navigate('/register');
							}}
						>
              Регистрация
						</Button>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
