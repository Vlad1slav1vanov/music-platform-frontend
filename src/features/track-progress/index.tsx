import { Slider, Typography } from "@mui/material";
import React from "react";
import './styles/index.scss';

const TrackProgress: React.FC = () => {
  return (
    <div className="track-progress">
      <Typography className="track-progress__duration">00:00</Typography>
      <Slider 
        min={0}
        max={100}
        sx={{
          color: "white"
        }} 
        />
      <Typography className="track-progress__duration">05:00</Typography>
    </div>
  )
}

export default TrackProgress;