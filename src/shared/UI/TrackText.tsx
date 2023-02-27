import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

interface TrackTextProps {
  text: string;
}

const TrackText: React.FC<TrackTextProps> = ({text}) => {
  return (
    <Accordion sx={{border: "1px grey solid"}}>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon color="primary" />}
      aria-controls="panel1a-content"
      >
        <Typography 
        fontSize={20} 
        color="primary" 
        >
          Текст Песни
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
          <Typography 
          color="secondary" 
          sx={{whiteSpace: "pre"}} 
          >
            {text}
          </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default TrackText;