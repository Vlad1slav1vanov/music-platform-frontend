import PlayerTrackInfo from "entities/player-track-info"
import PlayerStartStop from "features/player-button-start-stop"
import TrackProgress from "features/track-progress"
import Volume from "features/volume"
import { observer } from "mobx-react-lite"
import React from "react"
import './styles/index.scss'

const Player: React.FC = () => {
  return (
    <div className="player">
      <PlayerStartStop isActive={false} />
      <PlayerTrackInfo 
      name="Lose Yourself" 
      artist="Eminem" 
      album="Eminem Show" 
      />
      <TrackProgress />
      <Volume />
    </div>
  )
}

export default observer(Player);