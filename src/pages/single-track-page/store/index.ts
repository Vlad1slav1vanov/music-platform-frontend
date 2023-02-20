import { makeAutoObservable } from "mobx";
import axios from "shared/api/index"
import { ITrack } from "shared/types/track";

class TrackInfoStore {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  fetchError = ""
  track: ITrack | null = null

  fetchTrack = async (trackId: string | undefined) => {
    try {
      this.isLoading = true
      const {data} = await axios.get<ITrack>(`/tracks/${trackId}`)
      this.track = data
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

const trackInfoStore = new TrackInfoStore();
export default trackInfoStore;