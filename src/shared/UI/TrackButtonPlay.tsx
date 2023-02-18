import React from "react";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import playerStore from "shared/player-store";
import { IconButton } from "@mui/material";
import { ITrack } from "shared/types/track";
import { observer } from "mobx-react-lite";

interface TrackButtonPlayProps {
  track: ITrack;
  handlePlay: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  handlePause: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const TrackButtonPlay: React.FC<TrackButtonPlayProps> = ({
  track, 
  handlePlay, 
  handlePause
}) => {
  return (
    <div>
    {
    track === playerStore.active && !playerStore.pause
    ? <IconButton
      onClick={handlePause}
      size="large" 
      sx={{
        width: 50, 
        height: 50
      }}
      >
        <PauseCircleIcon 
        sx={{ 
          width: 40, 
          height: 40 
        }} 
        color="secondary" 
        fontSize="large" 
        />
      </IconButton>
    : <IconButton
      onClick={handlePlay}
      size="large" 
      sx={{
        width: 50, 
        height: 50
      }}
      >
        <PlayCircleFilledWhiteIcon 
        sx={{ 
          width: 40, 
          height: 40 
        }} 
        color="secondary" 
        fontSize="large"
        />
      </IconButton>
    }
    </div>
  )
}

export default observer(TrackButtonPlay);