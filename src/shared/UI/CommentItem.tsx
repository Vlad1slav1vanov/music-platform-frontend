import { Avatar, Card, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { baseUrl } from "shared/api/baseUrl";

interface CommentItemProps {
  username: string;
  avatarUrl?: string;
  text: string;
  createdAt: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  username, 
  avatarUrl, 
  text,
  createdAt
}) => {
  return (
    <Card 
    className="comment-item"
    sx={{
      width: "80%", 
      margin: "0 auto",
      border: "1px solid grey"
    }}
    >
      <Grid 
      container
      className="comment-item__user-info"
      sx={{
        display: "flex", 
        justifyContent: "space-between"
      }}
      >
        <Avatar
        src={avatarUrl ? baseUrl + "/" + avatarUrl : ""} 
        sx={{width: 30, height: 30, bgcolor: "primary"}}
        />
        <Typography 
        fontSize={15}>
          {username}
        </Typography>
      </Grid>
      <Typography 
      fontSize={13} 
      color="primary"
      >
        {text}
      </Typography>
      <Typography 
      fontSize={10} 
      color="secondary"
      >
        {dayjs(createdAt).format("DD.MM.YY в HH:mm")}
      </Typography>
    </Card>
  )
}

export default CommentItem;