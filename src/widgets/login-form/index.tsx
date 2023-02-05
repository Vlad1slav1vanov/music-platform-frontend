import { LoadingButton } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { observer } from "mobx-react-lite";
import React from "react";
import loginStore from "./store";
import './styles/index.scss'
import { useNavigate } from "react-router-dom";
import userStore from "shared/user-store";

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const successLogin = async () => {
    await loginStore.fetchLogin()
    if (userStore.email) {
      navigate('/')
    }
  }
  return (
    <div className="login-form">
      <form 
      className="login-form__form" 
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          successLogin();
        }
      }}>
        <TextField 
        label="E-mail" 
        fullWidth 
        value={loginStore.email} 
        onChange={loginStore.changeEmail}
        />
        <TextField 
        label="Пароль" 
        fullWidth
        value={loginStore.password}
        onChange={loginStore.changePassword} 
        />
        <div className="login-form__buttons-wrapper">
          <LoadingButton 
          variant="contained" 
          onClick={successLogin} 
          loading={loginStore.isLoading}
          endIcon={<CheckIcon />}
          loadingPosition='end'
          disabled={Boolean(!loginStore.email || !loginStore.password)}
          >
            Вход
          </LoadingButton>
          <Button 
          variant="outlined" 
          onClick={loginStore.refreshForm}
          >
            Сброс
          </Button>
        </div>
      </form>
      {loginStore.formError &&
      <Typography color='error'>{loginStore.formError}</Typography>
      }
    </div>
  )
}

export default observer(LoginForm);