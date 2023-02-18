import React from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { IconButton } from "@mui/material";

interface ButtonSkipNextProps {
  onClick: () => void;
}

const ButtonSkipNext: React.FC<ButtonSkipNextProps> = ({onClick}) => {
  return (
    <IconButton
    onClick={onClick}
    sx={{
      width: 50,
      height: 50
    }}
    >
      <SkipNextIcon 
      sx={{
        width: 40,
        height: 40,
        color: 'white'
      }}
      />
    </IconButton>
  )
}

export default ButtonSkipNext;