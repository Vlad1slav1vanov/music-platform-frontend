import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import { baseUrl } from "shared/api/baseUrl";
import userStore from "shared/user-store";

const CommentForm: React.FC = () => {
  return (
    <div className="comments-form">
      <Avatar
      src={baseUrl + "/" + userStore.avatarUrl} 
      sx={{
        width: 30, 
        height: 30, 
        bgcolor: "primary"
      }}
      />
      <TextField 
      multiline
      placeholder="Оставьте свой комментарий"
      />
      <Button
      color="primary"
      variant="contained"
      >
        Отправить
      </Button>
    </div>
  )
}

export default CommentForm;