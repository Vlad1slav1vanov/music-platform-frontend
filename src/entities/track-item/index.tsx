import { Card } from "@mui/material";
import React from "react";
import './styles/index.scss';

interface TrackItemProps {
  picture: string;
  name: string;
  artist: string;
  album?: string;
  duration: number;
  button: React.ReactNode;
}

const TrackItem: React.FC<TrackItemProps> = ({
  picture, 
  name, 
  artist, 
  album,
  duration,
  button
}) => {
  return (
    <Card className="track-item">
      {button}
      <img 
      className="track-item__image" 
      src={picture} 
      width="80" 
      height="80" 
      alt={`${name}, ${artist}`} 
      />
      <div className="track-item__info">
        <div className="track-item__name">{name}</div>
        <div className="track-item__artist">{artist}</div>
        <div className="track-item__album">{album}</div>
      </div>
      <div className="track-item__duration">
        {duration}
      </div>
    </Card>
  )
}

export default TrackItem;