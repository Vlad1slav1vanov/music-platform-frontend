import { IconButton } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import React from "react";

interface ButtonSkipPrevProps {
  onClick: () => void;
}

const ButtonSkipPrev: React.FC<ButtonSkipPrevProps> = ({onClick}) => {
  return (
    <IconButton
    onClick={onClick}
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