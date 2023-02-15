import { makeAutoObservable } from "mobx"

class UploadTrackStore {
  constructor() {
    makeAutoObservable(this)
  }

  name = ""
  artist = ""
  text = ""
  pictureUrl = ""
  pictureFile: File | null = null
  audioName = ""
  audioFile: File | null = null
  uploadError = ""

  changeName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.name = evt.target.value;
  }

  changeArtist = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.artist = evt.target.value;
  }

  changeText = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.text = evt.target.value;
  }

  changePicture = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const file = evt.target.files[0];
      this.pictureFile = file
      const reader = new FileReader();
      reader.onload = (e) => {
        this.pictureUrl = e?.target?.result as string
      }
      reader.readAsDataURL(file);
    }
  }

  changeAudio = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const file = evt.target.files[0];
      this.audioFile = file
      this.audioName = file.name
    }
  }

  deletePicture = () => {
    this.pictureFile = null
    this.pictureUrl = ""
  }

  deleteAudio = () => {
    this.audioFile = null
    this.audioName = ""
  }

  refreshForm = () => {
    this.artist = ""
    this.name = ""
    this.text = ""
    this.audioFile = null
    this.audioName = ""
    this.pictureFile = null
    this.pictureUrl = ""
  }
}

const uploadTrackStore = new UploadTrackStore();
export default uploadTrackStore;