import {IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/index.scss';

const menuItems = [
	{id: 1, text: 'Главная', href: '/', icon: <HomeIcon color='primary'/>},
	{id: 2, text: 'Мой профиль', href: '/profile', icon: <AccountBoxIcon color='primary'/>},
	{id: 3, text: 'Альбомы', href: '/albums', icon: <LibraryMusicIcon color='primary'/>},
	{id: 4, text: 'Треки', href: '/tracks', icon: <MusicNoteIcon color='primary'/>},
	{id: 5, text: 'Плейлисты', href: '/playlists', icon: <QueueMusicIcon color='primary'/>},
];

const MainNavigation: React.FC = () => (
	<div className='main-navigation'>
		<List>
			{menuItems.map(item =>
				<ListItem key={item.id}>
					<NavLink
						to={item.href}
						className='main-navigation__link'
					>
						<ListItemButton>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText>
								{item.text}
							</ListItemText>
						</ListItemButton>
					</NavLink>
				</ListItem>,
			)}
		</List>
	</div>
);

export default MainNavigation;

