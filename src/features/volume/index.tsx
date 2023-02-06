import React from "react";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider } from "@mui/material";
import './styles/index.scss'

const Volume: React.FC = () => {
  return (
    <div className="player-volume">
      <VolumeDown />
      <Slider 
      min={0} 
      max={100}
      valueLabelDisplay="auto"
      sx={{
        color: "white"
      }}
      />
      <VolumeUp />
    </div>
  )
}

export default Volume;