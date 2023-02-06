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
      <TrackProgress />
      <Volume />
    </div>
  )
}

export default observer(Player);