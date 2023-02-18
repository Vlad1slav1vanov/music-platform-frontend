import { Card, Typography } from "@mui/material";
import React from "react";
import { baseUrl } from "shared/api/baseUrl";
import './styles/index.scss';
import { ITrack } from "shared/types/track";
import playerStore from "shared/player-store";
import { observer } from "mobx-react-lite";
import TrackButtonPlay from "shared/UI/TrackButtonPlay";

interface TrackItemProps {
  track: ITrack;
}

const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  const play = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    playerStore.setActive(track);
    playerStore.playAudio();
    playerStore.setCurrentTime(0)
  };

  const pause = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    playerStore.pauseAudio();
  }

  return (
    <Card 
    className="track-item"
    >
      <TrackButtonPlay 
      handlePause={pause}
      handlePlay={play}
      track={track}
      />
      <img 
      className="track-item__image"
      src={track.picture ? `${baseUrl}/${track.picture}` : "/images/empty-audio.jpeg"} 
      width="80" 
      height="80" 
      alt={`${track.name}, ${track.artist}`} 
      />
      <div className="track-item__info">
        <Typography className="track-item__name">{track.name}</Typography>
        <Typography className="track-item__artist">{track.artist}</Typography>
        {/* <Typography className="track-item__album">{track.album}</Typography> */}
      </div>
    </Card>
  )
}

export default observer(TrackItem);