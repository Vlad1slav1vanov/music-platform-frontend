import { IconButton } from "@mui/material";
import React from "react";
import './styles/index.scss';
import ButtonPlayStop from "shared/UI/ButtonPlayStop";
import ButtonSkipPrev from "shared/UI/ButtonSkipPrev";
import ButtonSkipNext from "shared/UI/ButtonSkipNext";

interface PlayerButtonsProps {
  isActive: boolean;
}

const PlayerButtons: React.FC<PlayerButtonsProps> = ({isActive = false}) => {
  return (
    <div className="player-buttons">
      <ButtonSkipPrev />
      <ButtonPlayStop isActive={false} />
      <ButtonSkipNext />
    </div>
  )
}

export default PlayerButtons;