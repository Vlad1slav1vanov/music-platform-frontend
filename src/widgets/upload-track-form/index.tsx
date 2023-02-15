import { LoadingButton } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import './styles/index.scss';
import { observer } from "mobx-react-lite";
import uploadTrackStore from "./store";

const UploadTrackForm: React.FC = () => {
  const pictureInputRef = React.useRef<HTMLInputElement | null>(null);
  const audioInputRef = React.useRef<HTMLInputElement | null>(null);

  const pictureHandleClick = () => {
    pictureInputRef.current?.click()
  }

  const audioHandleClick = () => {
    audioInputRef.current?.click()
  }

  return (
    <div className="upload-track-form">
      <div className="upload-track-wrapper">
        <div className="picture-block">
          <img 
          className="upload-track-form__picture" 
          width={300} 
          height={300} 
          src={uploadTrackStore.pictureUrl ? uploadTrackStore.pictureUrl : '/images/empty-audio.jpeg'}
          alt=""
          />
          {
          uploadTrackStore.pictureUrl
          ? <Button
            color="error"
            onClick={uploadTrackStore.deletePicture}
            >
              Удалить
            </Button>
          : <Button
            onClick={pictureHandleClick}
            >
              Загрузить обложку
            </Button>
          }
        </div>
        <div className="form-wrapper">
          <input 
          type="file" 
          hidden 
          accept='image/*'
          ref={pictureInputRef}
          onChange={uploadTrackStore.changePicture}
          />
          <input 
          type="file" 
          hidden 
          accept='audio/*' 
          ref={audioInputRef}
          onChange={uploadTrackStore.changeAudio}
          />
          <TextField
          label="Название трека"
          fullWidth
          required
          value={uploadTrackStore.name}
          onChange={uploadTrackStore.changeName}
          />
          <TextField 
          label="Имя исполнителя"
          fullWidth
          required
          value={uploadTrackStore.artist}
          onChange={uploadTrackStore.changeArtist}
          />
          <div className="audio-block">
            {
            uploadTrackStore.audioName 
            ? <div className="delete-container">
                <Button
                color="error"
                onClick={uploadTrackStore.deleteAudio}
                >
                  Удалить
                </Button>
                <Typography>
                  {uploadTrackStore.audioName}
                </Typography>
              </div>
            : <Button
              onClick={audioHandleClick}
              >
                Загрузить аудио
              </Button>
            }
          </div>
          <TextField 
          label="Текст песни"
          fullWidth
          multiline
          />
        </div>
      </div>
      <div className="buttons-wrapper">
        <LoadingButton 
        endIcon={<CheckIcon />} 
        variant='contained' 
        loadingPosition='end'
        >
          Загрузить
				</LoadingButton>
        <Button
        variant="outlined"
        onClick={uploadTrackStore.refreshForm}
        >
          сброс
        </Button>
      </div>
    </div>
  )
}

export default observer(UploadTrackForm);