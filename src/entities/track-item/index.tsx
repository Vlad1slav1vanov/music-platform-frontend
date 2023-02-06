import { Card, IconButton } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import React from "react";

interface TrackItemProps {
  picture: string;
  name: string;
  artist: string;
  album?: string;
}

const TrackItem: React.FC<TrackItemProps> = ({
  picture, 
  name, 
  artist, 
  album
}) => {
  return (
    <Card className="track-item">
      <IconButton>
        <PlayCircleFilledWhiteIcon/>
      </IconButton>
      <img src={picture} alt={`${name}, ${artist}`} />
      <div className="track-item__info">
        <div className="track-item__name">{name}</div>
        <div className="track-item__artist">{artist}</div>
        <div className="track-item__album">{album}</div>
      </div>
    </Card>
  )
}

export default TrackItem;