import { Avatar, Button, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import userStore from "shared/user-store";

const CommentsBlock: React.FC = () => {
  return (
    <div className="comments-block">
      <Typography>Комментарии</Typography>
      {userStore.email
      ? <div className="comments-block__create-comment">
          <Avatar/>       
          <TextField
          label="Оставить комментарий..."
          multiline
          fullWidth
          />
          <Button
          sx={{alignSelf: 'end'}}
          variant='contained' 
          >
            Отправить
          </Button>
        </div>
      : <div className="comments-block__register-error">
        
        </div>
      }
    </div>
  )
}

export default observer(CommentsBlock);