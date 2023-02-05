import { makeAutoObservable, runInAction } from "mobx";
import axios from 'shared/api/index'
import { IUserWithToken } from "shared/types/user";
import userStore from "shared/user-store";

class LoginStore {
  constructor() {
    makeAutoObservable(this)
  }

  email = ''
  password = ''
  formError = ''
  isLoading = false

  changeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.email = evt.target.value
  }

  changePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.password = evt.target.value
  }

  refreshForm = () => {
    this.email = ''
    this.password = ''
  }

  fetchLogin = async () => {
    try {
      runInAction(() => {
        this.isLoading = true
      })
      const {data} = await axios.post<IUserWithToken>('/users/login', {email: this.email, password: this.password})
      runInAction(() => {
        this.refreshForm()
        userStore.saveUserData(data)
      })
    } catch (err) {
      runInAction(() => {
        if (err.response) {
          this.formError = err.response.data.message
        } else {
          this.formError = err.message
        }
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }
}

const loginStore = new LoginStore();
export default loginStore;