import PlayerTrackInfo from "entities/player-track-info"
import PlayerButtons from "features/player-buttons"
import TrackProgress from "features/track-progress"
import Volume from "features/volume"
import { observer } from "mobx-react-lite"
import React from "react"
import playerStore from "shared/player-store"
import trackListStore from "widgets/track-list/store"
import './styles/index.scss'

let audio: HTMLAudioElement

const Player: React.FC = () => {
  const changeVolume = (evt: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(evt.target.value) / 100
    playerStore.setVolume(Number(evt.target.value))
  }

  const changeCurrentTime = (evt: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(evt.target.value)
    playerStore.setCurrentTime(Number(evt.target.value))
  }

  const play = () => {
    playerStore.playTrack()
    playerStore.playAudio()
  }

  const pause = () => {
    playerStore.pauseTrack()
    playerStore.pauseAudio()
  }

  const previousTrack = () => {
    const activeTrack = playerStore.playList.findIndex(
      track => track === playerStore.active
    )

    playerStore.setCurrentTime(0);

    if (activeTrack === 0) {
      return;
    }

    playerStore.setActive(playerStore.playList[activeTrack - 1])
  }

  const nextTrack = () => {
    const activeTrack = playerStore.playList.findIndex(
      track => track === playerStore.active
    )

    playerStore.setCurrentTime(0);

    if (activeTrack === playerStore.playList.length - 1) {
      return;
    }

    playerStore.setActive(playerStore.playList[activeTrack + 1])
  }

  React.useEffect(() => {
    if (!audio) {
      audio = new Audio();
    }
    
    playerStore.initAudio(audio)
    playerStore.setAudio();

    if (!playerStore.pause) {
      playerStore.playAudio();
    }
  }, [playerStore.active])

  if (!playerStore.active) {
    return null;
  }

  return (
    <div className="player">
      <PlayerButtons 
      isActive={Boolean(!playerStore.pause)}
      handleSkipPrev={previousTrack}
      handleSkipNext={nextTrack}
      handlePlay={play}
      handlePause={pause}
      />
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