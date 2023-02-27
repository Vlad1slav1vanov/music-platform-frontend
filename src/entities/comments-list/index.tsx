import { Typography } from "@mui/material";
import React from "react";
import { IComment } from "shared/types/comment";
import CommentItem from "shared/UI/CommentItem";

interface CommentsListProps {
  comments?: IComment[]
}

const CommentsList: React.FC<CommentsListProps> = ({comments}) => {
  return (
    <div className="comments-list">
      {comments
      ? comments.map(comment => 
          <CommentItem 
          key={comment._id}
          username={comment.user.fullName}
          createdAt={comment.createdAt}
          text={comment.text}
          avatarUrl={comment.user.avatarUrl}
          />
        )
      : <Typography 
          fontSize={15} 
          sx={{color: "grey"}} 
        >
          Оставьте первый комментарий...
        </Typography>
      }
    </div>
  )
}

export default CommentsList;