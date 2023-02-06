import { Slider } from "@mui/material";
import React from "react";
import './styles/index.scss';

const TrackProgress: React.FC = () => {
  return (
    <div className="track-progress">
      <div className="track-progress__duration">00:00</div>
      <Slider 
        min={0}
        max={100}
        valueLabelDisplay="auto"
        sx={{
          color: "white"
        }} 
        />
      <div className="track-progress__duration">05:00</div>
    </div>
  )
}

export default TrackProgress;