import TrackItem from "entities/track-item";
import TrackListSort from "features/track-list-sort";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import playerStore from "shared/player-store";
import trackListStore from "./store";
import './styles/index.scss';

const TrackList: React.FC = () => {
  useEffect(() => {
    trackListStore.fetchTracks()
  }, [])

  const setPlayList = React.useMemo(() => {
    playerStore.setPlayList(trackListStore.trackList)
  }, [trackListStore.trackList])

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
        key={track._id}
        track={track}
        />
      )}
    </div>
  )
}

export default observer(TrackList);