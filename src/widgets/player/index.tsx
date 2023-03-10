import PlayerTrackInfo from "entities/player-track-info"
import PlayerButtons from "features/player-buttons"
import TrackProgress from "features/track-progress"
import Volume from "features/volume"
import { observer } from "mobx-react-lite"
import React from "react"
import playerStore from "shared/player-store"
import './styles/index.scss'

let audio: HTMLAudioElement

const Player: React.FC = () => {
  const handleVolumeChange = (event: Event, value: number | number[]) => {
    const newVolume = typeof value === 'number' ? value : value[0]
    audio.volume = newVolume / 100
    playerStore.setVolume(newVolume)
  }

  const handleCurrentTimeChange = (event: Event, value: number | number[]) => {
    const newCurrentTime = typeof value === 'number' ? value : value[0]
    audio.currentTime = newCurrentTime
    playerStore.setCurrentTime(newCurrentTime)
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
    if (playerStore.currentTime === playerStore.duration) {
      nextTrack();
    }
  }, [playerStore.currentTime])

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
      name={playerStore.active.name}
      artist={playerStore.active.artist} 
      // album={playerStore.active.} 
      />
      <TrackProgress 
      value={playerStore.currentTime}
      onChange={handleCurrentTimeChange}
      duration={playerStore.currentTime}
      fullTime={playerStore.duration}
      />
      <Volume 
      value={playerStore.volume}
      onChange={handleVolumeChange}
      />
    </div>
  )
}

export default observer(Player);