import React from 'react';
import PageTitle from 'shared/UI/PageTitle';
import TrackList from 'widgets/track-list';

const TracksPage: React.FC = () => (
	<div className='tracks-page'>
    <PageTitle>Все треки</PageTitle>
    <TrackList />
  </div>
);

export default TracksPage;
