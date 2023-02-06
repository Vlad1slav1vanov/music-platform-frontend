import UploadOffer from 'entities/upload-offer';
import React from 'react';
import PageTitle from 'shared/UI/PageTitle';
import TrackList from 'widgets/track-list';
import './styles/index.scss';

const TracksPage: React.FC = () => (
	<div className='tracks-page'>
    <PageTitle>Все треки</PageTitle>
    <UploadOffer />
    <TrackList />
  </div>
);

export default TracksPage;
