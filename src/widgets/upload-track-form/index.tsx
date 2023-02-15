import { LoadingButton } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import './styles/index.scss';

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
          />
          <Button
          onClick={pictureHandleClick}
          >
            Загрузить обложку
          </Button>
        </div>
        <div className="form-wrapper">
          <input 
          type="file" 
          hidden 
          accept='image/*'
          ref={pictureInputRef}
          />
          <input 
          type="file" 
          hidden 
          accept='audio/*' 
          ref={audioInputRef}
          />
          <TextField
          label="Название трека"
          fullWidth
          required
          />
          <TextField 
          label="Имя исполнителя"
          fullWidth
          required
          />
          <div className="audio-block">
            <Button
            onClick={audioHandleClick}
            >
              Загрузить аудио
            </Button>
            <Typography>audio name</Typography>
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
        >
          сбросить
        </Button>
      </div>
    </div>
  )
}

export default UploadTrackForm;