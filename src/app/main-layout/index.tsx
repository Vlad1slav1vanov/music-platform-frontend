import React from 'react';
import Header from 'widgets/header';
import MainNavigation from 'widgets/main-navigation';
import Player from 'widgets/player';
import './styles/index.scss';

type MainNavigationProps = {
	children: React.ReactNode;
};

const MainLayout: React.FC<MainNavigationProps> = ({children}) => (
	<>
		<Header/>
		<MainNavigation />
    <Player />
		<main className='main-wrapper'>
			{children}
		</main>
	</>
);

export default MainLayout;
