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
  sortState = ""

  fetchTracks = async () => {
    try {
      this.isLoading = true
      this.sortState = "all"
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

  fetchPopularTracks = async () => {
    try {
      this.isLoading = true
      this.sortState = "popular"
      const {data} = await axios.get<ITrack[]>('/tracks/popular')
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

  fetchNewTracks = async () => {
    try {
      this.isLoading = true
      this.sortState = "new"
      const {data} = await axios.get<ITrack[]>('/tracks/new')
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