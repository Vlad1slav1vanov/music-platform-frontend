import React from "react";
import './styles/index.scss';
import ButtonPlayStop from "shared/UI/ButtonPlayStop";
import ButtonSkipPrev from "shared/UI/ButtonSkipPrev";
import ButtonSkipNext from "shared/UI/ButtonSkipNext";

interface PlayerButtonsProps {
  isActive: boolean
  handleSkipPrev: () => void
  handleSkipNext: () => void
  handlePlay: () => void
  handlePause: () => void
}

const PlayerButtons: React.FC<PlayerButtonsProps> = ({
  isActive, 
  handleSkipPrev, 
  handleSkipNext, 
  handlePause, 
  handlePlay
}) => {
  return (
    <div className="player-buttons">
      <ButtonSkipPrev 
      onClick={handleSkipPrev} 
      />
      <ButtonPlayStop 
      isActive={isActive} 
      play={handlePlay} 
      pause={handlePause} 
      />
      <ButtonSkipNext 
      onClick={handleSkipNext} 
      />
    </div>
  )
}

export default PlayerButtons;