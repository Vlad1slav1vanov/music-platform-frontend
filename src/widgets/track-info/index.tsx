import { Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "shared/api/baseUrl";
import dayjs from "dayjs";
import './styles/index.scss';

interface TrackInfoProps {
  fetchTrack: (id?: string) => void
  picture?: string
  artist?: string
  createdAt?: string
}

const TrackInfo: React.FC<TrackInfoProps> = ({
  fetchTrack,
  picture,
  artist,
  createdAt
}) => {
  const {id} = useParams();
  React.useEffect(() => {
    fetchTrack(id)
  }, []);

  return (
    <div className="track-info">
      <div className="track-info__image-wrapper">
        <img 
        width={300}
        height={300}
        src={baseUrl + "/" + picture}
        alt=""
        />
      </div>
      <div className="track-info__info-wrapper">
        <Typography fontSize={30} >
          Исполнитель: {artist}
        </Typography>
        <Typography fontSize={20}>
          Дата загрузки: {dayjs(createdAt).format("DD.MM.YY")}
        </Typography>
        {/* <div className="track-info__comments">
          <Typography>Комментари</Typography>
          <Typography></Typography>
        </div> */}
      </div>
    </div>
  )
}

export default observer(TrackInfo);