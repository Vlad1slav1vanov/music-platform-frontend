import { IconButton } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

interface ButtonPlayStopProps {
  isActive: boolean;
  play: () => void;
  pause: () => void;
}

const ButtonPlayStop: React.FC<ButtonPlayStopProps> = ({
  isActive, 
  play, 
  pause
}) => {
  return (
    <>
      {
      isActive
      ? <IconButton
        onClick={pause}
        size="large" 
        sx={{
          width: 70, 
          height: 70
        }}
        >
          <PauseCircleIcon 
          sx={{ 
            width: 60, 
            height: 60,
            color: 'white',
          }}  
          />
        </IconButton>
      : <IconButton 
        onClick={play}
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

export default ButtonPlayStop;