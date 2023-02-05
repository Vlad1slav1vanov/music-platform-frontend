import axios from "shared/api/index";
import { makeAutoObservable, runInAction } from "mobx";
import { IUserWithToken } from "shared/types/user";

class UserStore {
  constructor() {
    makeAutoObservable(this)
  }

  avatarUrl = ''
  fullName = ''
  email = ''

  saveToken = (token: string) => {
    window.localStorage.setItem('token', token)
  }

  saveUserData = (data: IUserWithToken) => {
    if (data.avatarUrl) {
      this.avatarUrl = data.avatarUrl
    }

    if (data.token) {
      this.saveToken(data.token)
    }

    this.fullName = data.fullName
    this.email = data.email
  }

  authUser = async () => {
    const {data} = await axios.get<IUserWithToken>('/users/me')
    runInAction(() => {
      this.saveUserData(data)
    })
  }

  logout = async () => {
    window.localStorage.removeItem('token');
    this.email = ''
    this.avatarUrl = ''
    this.fullName = ''
  }
}

const userStore = new UserStore();
export default userStore;