import {AppBar, Avatar, Button, Toolbar, Typography} from '@mui/material';
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import userStore from 'shared/user-store';
import './styles/index.scss';
import { baseUrl } from 'shared/api/baseUrl';
import { observer } from 'mobx-react-lite';

const Header: React.FC = () => {
  useEffect(() => {
    userStore.authUser()
  }, [userStore.email])
	const navigate = useNavigate();
	return (
		<AppBar>
			<Toolbar>
				<div className='header-wrapper'>
					<Typography variant='h5'>
            Music Platform
					</Typography>
          {
          userStore.email 
          ?
          <div className='user-block'>
            <Avatar src={baseUrl + userStore.avatarUrl} />
            <Typography>{userStore.fullName}</Typography>
            <Button 
            variant='contained' 
            color='secondary'
            onClick={userStore.logout} 
            >
              Выйти
            </Button>
          </div>
          :
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
          }
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default observer(Header);
