import AlbumsPage from 'pages/albums-page';
import HomePage from 'pages/home-page';
import LoginPage from 'pages/login-page';
import PlaylistsPage from 'pages/playlists-page';
import ProfilePage from 'pages/profile-page';
import RegisterPage from 'pages/register-page';
import SingleAlbumPage from 'pages/single-album-page';
import SingleTrackPage from 'pages/single-track-page';
import TracksPage from 'pages/tracks-page';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

const Paths: React.FC = () => (
	<Routes>
		<Route path='/' element={<HomePage />}/>
		<Route path='/tracks' element={<TracksPage />}/>
		<Route path='/tracks/:id' element={<SingleTrackPage />}/>
		<Route path='/albums' element={<AlbumsPage />}/>
		<Route path='/albums/:id' element={<SingleAlbumPage />}/>
		<Route path='/login' element={<LoginPage />}/>
		<Route path='/register' element={<RegisterPage />}/>
		<Route path='/playlists' element={<PlaylistsPage />}/>
		<Route path='/profile' element={<ProfilePage />}/>
	</Routes>
);

export default Paths;
