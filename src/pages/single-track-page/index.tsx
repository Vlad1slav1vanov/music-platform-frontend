import { observer } from 'mobx-react-lite';
import React from 'react';
import ButtonBack from 'shared/UI/ButtonBack';
import PageTitle from 'shared/UI/PageTitle';
import TrackInfo from 'widgets/track-info';
import trackInfoStore from './store';
import './styles/index.scss';

const SingleTrackPage: React.FC = () => (
	<div className='single-track-page'>
    <div className="single-track-page__title-wrapper">
      <ButtonBack path='/tracks' />
      <PageTitle>{trackInfoStore.track?.name}</PageTitle>
    </div>
    <TrackInfo
    fetchTrack={trackInfoStore.fetchTrack}
    picture={trackInfoStore.track?.picture}
    artist={trackInfoStore.track?.artist}
    createdAt={trackInfoStore.track?.createdAt}
    />
  </div>
);

export default observer(SingleTrackPage);
