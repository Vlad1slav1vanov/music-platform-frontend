import React from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { IconButton } from "@mui/material";
import { height } from "@mui/system";


const ButtonSkipNext: React.FC = () => {
  return (
    <IconButton
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