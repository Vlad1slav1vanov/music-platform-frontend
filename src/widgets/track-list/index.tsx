import TrackItem from "entities/track-item";
import React from "react";
import './styles/index.scss';

const TrackList: React.FC = () => {
  const trackList = [
    {id: 1, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
    {id: 2, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
    {id: 3, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
    {id: 4, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
    {id: 5, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
    {id: 6, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
    {id: 7, name: 'Lose Yourself', artist: 'Eminem', picture: 'nkvslvndk'},
  ]

  return (
    <div className="track-list">
      {trackList.map(track => 
        <TrackItem 
        key={track.id}
        name={track.name}
        artist={track.artist} 
        picture={track.picture}
        />
        )}
    </div>
  )
}

export default TrackList;