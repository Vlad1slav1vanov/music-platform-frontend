import { makeAutoObservable } from "mobx";
import { ITrack } from "shared/types/track";
import axios from "shared/api/index";

class TrackListStore {
  constructor () {
    makeAutoObservable(this)
  }

  trackList: ITrack[] = []
  fetchError = ""
  isLoading = false

  fetchTracks = async () => {
    try {
      this.isLoading = true
      const {data} = await axios.get<ITrack[]>('/tracks')
      this.trackList = data
    } catch (err) {
      if (err.response) {
        this.fetchError = err.response.data.message
      } else {
        this.fetchError = err.message
      }
    } finally {
      this.isLoading = false
    }
  }
}

const trackListStore = new TrackListStore();
export default trackListStore;