import { Button, Typography } from "@mui/material";
import React from "react";
import './styles/index.scss';

const UploadOffer: React.FC = () => {
  return (
    <div className='upload-offer'>
      <Typography fontSize={20}>
        Не нашли любимый трек? Загрузите его!
      </Typography>
      <Button variant='contained'>
        Загрузить
      </Button>
    </div>
  )
}

export default UploadOffer;