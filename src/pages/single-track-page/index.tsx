import { observer } from 'mobx-react-lite';
import React from 'react';
import ButtonBack from 'shared/UI/ButtonBack';
import PageTitle from 'shared/UI/PageTitle';
import TrackText from 'shared/UI/TrackText';
import CommentsBlock from 'widgets/comments-block';
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
    {
      trackInfoStore.track?.text
      && <TrackText text={trackInfoStore.track?.text} />
    }

    <CommentsBlock 
    comments={trackInfoStore.track?.comments} 
    commentsCount={trackInfoStore.track?.commentsCount}
    />
  </div>
);

export default observer(SingleTrackPage);
