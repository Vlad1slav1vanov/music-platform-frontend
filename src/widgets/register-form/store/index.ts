import { makeAutoObservable, runInAction } from "mobx";
import { emailRe } from "shared/regexps";
import axios from 'shared/api'
import { IUserWithToken } from "shared/types/user";
import userStore from "shared/user-store";

class RegisterStore {
  constructor() {
    makeAutoObservable(this)
  }

  fullName = ''
  fullNameError = ''
  email = ''
  emailError = ''
  password = ''
  passwordError = ''
  avatarUrl = ''
  avatarFile = null as File | null
  registerError = ''
  isLoading = false

  
  validateForm = () => {
    this.fullNameError = ''
    this.emailError = ''
    this.passwordError = ''

    if (!this.fullName) {
      this.fullNameError = 'Укажите Имя/Никнейм'
    }
    if (!this.email) {
      this.emailError = 'Укажите ваш E-mail'
    }
    if (!emailRe.test(String(this.email).toLowerCase())) {
      this.emailError = 'Неверный формат почты'
    }
    if (!this.password) {
      this.passwordError = 'Укажите ваш пароль'
    }
    if (this.fullName && this.fullName.length < 3 || this.fullName.length > 15) {
      this.fullNameError = 'Длина имени должна быть от 3 до 15 символов'
    }
    if (this.password && (this.password.length < 8 || this.password.length > 20)) {
      this.passwordError = 'Длина пароля должна быть от 8 до 20 символов'
    }

    return !this.fullNameError && !this.emailError && !this.passwordError
  }

  changeFullName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.fullName = evt.target.value
  }

  changeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.email = evt.target.value
  }

  changePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.password = evt.target.value
  }

  changePicture = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const file = evt.target.files[0];
      this.avatarFile = file
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarUrl = e?.target?.result as string
      }
      reader.readAsDataURL(file);
    }
  }

  deletePicture = () => {
    this.avatarFile = null
    this.avatarUrl = ''
  }

  refreshForm = () => {
    this.deletePicture()
    this.email = ''
    this.emailError = ''
    this.fullName = ''
    this.fullNameError = ''
    this.password = ''
    this.passwordError = ''
  }

  createFormData = () => {
    const formData = new FormData();
    formData.append('email', this.email)
    formData.append('fullName', this.fullName)
    formData.append('password', this.password)
    this.avatarFile &&
    formData.append('picture', this.avatarFile)
    return formData
  }

  fetchRegister = async () => {
    try {
      runInAction(() => {
        this.isLoading = true
        if (!this.validateForm()) {
          return
        }
      })
      const {data} = await axios.post<IUserWithToken>('/users/register', this.createFormData())
      runInAction(() => {
        userStore.saveUserData(data)
      })
    } catch (err) {
      runInAction(() => {
        if (err.response) {
          this.registerError = err.response.data.message
        } else {
          this.registerError = err.message
        }
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }
}

const registerStore = new RegisterStore();
export default registerStore;