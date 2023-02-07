import { Typography } from "@mui/material";
import React from "react";
import './styles/index.scss';

interface PlayerTrackInfoProps {
  name: string;
  artist: string;
  album?: string;
}

const PlayerTrackInfo: React.FC<PlayerTrackInfoProps> = ({
  name, 
  artist, 
  album
}) => {
  return (
    <div className="player-track-info">
      <Typography className="player-track-info__name">{name}</Typography>
      <div className="player-track-info__wrapper">
        <Typography className="player-track-info__artist">{artist}</Typography>
        {
        album 
        &&
        <Typography className="player-track-info__album">({album})</Typography>
        }
      </div>
    </div>
  )
}

export default PlayerTrackInfo;