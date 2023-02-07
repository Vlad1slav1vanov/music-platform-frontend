import PlayerTrackInfo from "entities/player-track-info"
import PlayerButtons from "features/player-buttons"
import TrackProgress from "features/track-progress"
import Volume from "features/volume"
import { observer } from "mobx-react-lite"
import React from "react"
import './styles/index.scss'

const Player: React.FC = () => {
  return (
    <div className="player">
      <PlayerButtons isActive={false} />
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