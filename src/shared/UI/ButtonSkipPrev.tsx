import { IconButton } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import React from "react";

const ButtonSkipPrev: React.FC = () => {
  return (
    <IconButton
    sx={{
      width: 50,
      height: 50,
    }}
    >
      <SkipPreviousIcon 
      sx={{
        width: 40,
        height: 40,
        color: 'white'
      }}
      />
    </IconButton>
  )
}

export default ButtonSkipPrev;