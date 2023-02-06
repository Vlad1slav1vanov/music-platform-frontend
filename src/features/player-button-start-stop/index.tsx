import { IconButton } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

interface PlayerStartStopProps {
  isActive: boolean;
}

const PlayerStartStop: React.FC<PlayerStartStopProps> = ({isActive}) => {
  return (
    <>
      {
      isActive
      ? <IconButton 
        size="large" 
        sx={{
          width: 70, 
          height: 70
        }}
        >
          <PauseCircleIcon 
          sx={{ 
            width: 60, 
            height: 60 
          }} 
          color="secondary" 
          fontSize="large" 
          />
        </IconButton>
      : <IconButton 
        size="large" 
        sx={{
          width: 70, 
          height: 70
        }}
        >
          <PlayCircleFilledWhiteIcon 
          sx={{ 
            width: 60, 
            height: 60,
            color: "white"
          }} 
          />
        </IconButton>
      }
    </>
  )
}

export default PlayerStartStop;