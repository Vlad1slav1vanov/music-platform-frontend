import TrackItem from "entities/track-item";
import ButtonStartStop from "features/button-start-stop";
import TrackListSort from "features/track-list-sort";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import trackListStore from "./store";
import './styles/index.scss';

const TrackList: React.FC = () => {
  useEffect(() => {
    trackListStore.fetchTracks()
  }, [])

  return (
    <div className="track-list">
      <TrackListSort
      value={trackListStore.sortState}
      getAllTracks={trackListStore.fetchTracks}
      getNewTracks={trackListStore.fetchNewTracks}
      getPopularTracks={trackListStore.fetchPopularTracks}
      />
      {trackListStore.trackList.map(track => 
        <TrackItem
        button={<ButtonStartStop isActive={false} />}
        key={track._id}
        name={track.name}
        artist={track.artist} 
        picture={track.picture}
        />
      )}
    </div>
  )
}

export default observer(TrackList);