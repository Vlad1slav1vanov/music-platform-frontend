import { Card, Typography } from "@mui/material";
import React from "react";
import './styles/index.scss';

interface TrackItemProps {
  picture?: string;
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
      src={picture ? picture : "/images/empty-audio.jpeg"} 
      width="80" 
      height="80" 
      alt={`${name}, ${artist}`} 
      />
      <div className="track-item__info">
        <Typography className="track-item__name">{name}</Typography>
        <Typography className="track-item__artist">{artist}</Typography>
        <Typography className="track-item__album">{album}</Typography>
      </div>
      <div className="track-item__duration">
        <Typography>
          {duration}
        </Typography>
      </div>
    </Card>
  )
}

export default TrackItem;