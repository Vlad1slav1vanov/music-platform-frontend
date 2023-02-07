import React from "react";
import ButtonBack from "shared/UI/ButtonBack";
import PageTitle from "shared/UI/PageTitle";
import './styles/index.scss';

const UploadTrackPage: React.FC = () => {
  return (
    <div className="upload-track-page">
      <div className="title-wrapper">
        <ButtonBack path='/tracks' />
        <PageTitle>Загрузить трек</PageTitle>
      </div>
    </div>
  )
}

export default UploadTrackPage;