import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { observer } from "mobx-react-lite";
import React from "react";
import CommentsList from "entities/comments-list";
import { IComment } from "shared/types/comment";
import CommentForm from "entities/comment-form";

interface CommentsBlockProps {
  comments?: IComment[]
  commentsCount?: number;
}

const CommentsBlock: React.FC<CommentsBlockProps> = ({comments, commentsCount}) => {
  return (
    <div className="comments-block">
    <Accordion sx={{border: "1px grey solid"}}>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon color="primary" />}
      aria-controls="panel1a-content"
      >
        <Typography fontSize={20} color="primary" >Комментарии ({commentsCount})</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{display: "flex", flexDirection: "column", gap: "30px"}}>
        <CommentForm />
        <CommentsList comments={comments} />
      </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default observer(CommentsBlock);