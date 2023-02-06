import TrackItem from "entities/track-item";
import ButtonStartStop from "features/button-start-stop";
import React from "react";
import './styles/index.scss';

const TrackList: React.FC = () => {
  const trackList = [
    {id: 1, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
    {id: 2, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
    {id: 3, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
    {id: 4, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
    {id: 5, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
    {id: 6, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
    {id: 7, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk', duration: 500},
  ]

  return (
    <div className="track-list">
      {trackList.map(track => 
        <TrackItem
        button={<ButtonStartStop isActive={false} />}
        key={track.id}
        name={track.name}
        artist={track.artist} 
        picture={track.picture}
        duration={track.duration}
        />
      )}
    </div>
  )
}

export default TrackList;