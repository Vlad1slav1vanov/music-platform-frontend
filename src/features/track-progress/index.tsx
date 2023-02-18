import { Slider, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import './styles/index.scss';
import dayjs from "dayjs";

interface TrackProgressProps {
  value: number
  onChange: (event: Event, value: number | number[]) => void
  duration: number
  fullTime: number
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  value,
  onChange,
  duration,
  fullTime
}) => {
  return (
    <div className="track-progress">
      <Typography 
      className="track-progress__duration"
      >
        {dayjs(duration*1000).format('mm:ss')}
      </Typography>
      <Slider 
        min={0}
        max={fullTime}
        value={value}
        onChange={onChange}
        sx={{
          color: "white"
        }} 
        />
      <Typography 
      className="track-progress__duration"
      >
        {dayjs(fullTime*1000).format('mm:ss')}
      </Typography>
    </div>
  )
}

export default observer(TrackProgress);