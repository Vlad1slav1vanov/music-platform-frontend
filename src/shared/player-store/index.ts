import { makeAutoObservable } from "mobx";
import { baseUrl } from "shared/api/baseUrl";
import { ITrack } from "shared/types/track";

class PlayerStore {
  constructor () {
    makeAutoObservable(this)
  }

  audio = null as HTMLAudioElement | null;

  currentTime = 0
  duration = 0
  active: ITrack | null = null
  volume = 50
  pause = true

  pauseTrack = () => {
    this.pause = true;
  }

  playTrack = () => {
    this.pause = false;
  }

  setVolume = (volume: number) => {
    this.volume = volume;
  }

  setCurrentTime = (time: number) => {
    this.currentTime = time;
  }

  setDuration = (time: number) => {
    this.duration = time;
  }

  setActive = (track: ITrack) => {
    this.active = track;
  }

  initAudio = (audio: HTMLAudioElement) => {
    this.audio = audio;
  }

  setAudio = () => {
    if (this.active && this.audio) {
      this.audio.src = this.active ? `${baseUrl}/${this.active.audio}` : '';
      this.audio.volume = this.volume / 100;
      this.audio.onloadedmetadata = () => {
        this.audio && this.setDuration(this.audio.duration)
      }
      this.audio.ontimeupdate = () => {
        this.audio && this.setCurrentTime(this.audio.currentTime)
      }
      this.audio.currentTime = this.currentTime
    }
  }

  playAudio = () => {
    this.playTrack()
    this.audio && this.audio.play()
  }

  pauseAudio = () => {
    this.pauseTrack()
    this.audio && this.audio.pause()
  }
}

const playerStore = new PlayerStore();
export default playerStore;