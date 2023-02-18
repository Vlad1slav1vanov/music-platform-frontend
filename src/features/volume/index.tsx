import React from "react";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider } from "@mui/material";
import './styles/index.scss'

interface VolumeProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

const Volume: React.FC<VolumeProps> = ({value, onChange}) => {
  return (
    <div className="player-volume">
      <VolumeDown />
      <Slider 
      onChange={onChange}
      value={value}
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