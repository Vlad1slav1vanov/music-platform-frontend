import { makeAutoObservable, runInAction } from "mobx"
import { ITrack } from "shared/types/track"
import userStore from "shared/user-store"
import axios from "../../../shared/api/index"

class UploadTrackStore {
  constructor() {
    makeAutoObservable(this)
  }

  name = ""
  nameError = ""
  artist = ""
  artistError = ""
  text = ""
  pictureUrl = ""
  pictureFile: File | null = null
  audioName = ""
  audioFile: File | null = null
  audioFileError = ""
  uploadError = ""
  fetchLoading = false
  isPopupOpen = false
  popupText = ""

  closePopup = () => {
    this.isPopupOpen = false
  }

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

  createFormData = () => {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('artist', this.artist);
    formData.append('text', this.text);
    this.pictureFile &&
    formData.append('picture', this.pictureFile);
    this.audioFile &&
    formData.append('audio', this.audioFile);
  }

  validateForm = () => {
    if (!this.audioFile) {
      this.audioFileError = "Укажите название трека"
      return false
    }

    if (!this.name) {
      this.nameError = "Укажите имя исполнителя"
      return false
    }

    if (!this.artist) {
      this.artistError = "Загрузите аудиофайл"
      return false
    }

    if (!userStore.email) {
      this.uploadError = "Только зарегистрированные пользователи могут загружать треки"
      return false
    }

    return true
  }

  fetchUploadTrack = async () => {
    try {
      runInAction(() => {
        this.fetchLoading = true
        if (!this.validateForm()) {
          return
        }
      })
      const formData = this.createFormData()
      const {data} = await axios.post<ITrack>('/tracks', formData)
      runInAction(() => {
        this.refreshForm()
        this.isPopupOpen = true
        this.popupText = `Трек ${data.name} успешно загружен!`
      })
    } catch (err) {
      runInAction(() => {
        if (err.response) {
          this.uploadError = err.response.data.message
        } else {
          this.uploadError = err.message
        }
      })
    } finally {
      runInAction(() => {
        this.fetchLoading = false
      })
    }
  }
}

const uploadTrackStore = new UploadTrackStore();
export default uploadTrackStore;