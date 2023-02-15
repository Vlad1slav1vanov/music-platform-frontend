import { makeAutoObservable } from "mobx"

class UploadTrackStore {
  constructor() {
    makeAutoObservable(this)
  }
}

const uploadTrackStore = new UploadTrackStore();
export default uploadTrackStore;