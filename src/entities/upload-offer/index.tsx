import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/index.scss';

const UploadOffer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='upload-offer'>
      <Typography fontSize={20}>
        Не нашли любимый трек? Загрузите его!
      </Typography>
      <Button 
      variant='contained'
      onClick={() => navigate('/tracks/upload')}
      >
        Загрузить
      </Button>
    </div>
  )
}

export default UploadOffer;