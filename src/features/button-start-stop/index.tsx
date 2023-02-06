import React from "react";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { IconButton } from "@mui/material";
import './styles/index.scss';

interface ButtonStartStopProps {
  isActive: boolean;
}

const ButtonStartStop: React.FC<ButtonStartStopProps> = ({isActive = false}) => {
  return (
    <div className="button-wrapper">
      {
      isActive
      ? <IconButton 
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

export default ButtonStartStop;