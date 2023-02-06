import { LoadingButton } from '@mui/lab';
import {Avatar, Button, TextField, Typography} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {observer} from 'mobx-react-lite';
import React from 'react';
import registerStore from './store';
import './styles/index.scss';
import userStore from 'shared/user-store';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const avatarInput = React.useRef<HTMLInputElement | null>(null) 
  const successButton = React.useRef<HTMLButtonElement | null>(null)
  const navigate = useNavigate()

  const successRegister = async () => {
    await registerStore.fetchRegister()
    if (userStore.email) {
      navigate('/')
    }
  }

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Enter") {
      successButton.current?.click()
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

	return (
		<div className='register-form'>
			<Avatar
				sx={{
					width: 150,
					height: 150,
					background: '#5824f3',
				}}
        src={registerStore.avatarUrl}
			/>
			<div className='register-form__avatar-buttons'>
				{registerStore.avatarUrl
					? <Button
						color='error'
						onClick={registerStore.deletePicture}
					>
            Удалить
					</Button>
					: <Button
						onClick={() => avatarInput.current?.click()}
					>
            Загрузить аватар
					</Button>
				}
			</div>
			<form className='register-form__form'>
				<input
					type='file'
					accept='image/*'
					hidden
          onChange={registerStore.changePicture}
          ref={avatarInput}
				/>
				<TextField
					label='E-mail'
					type='email'
          error={Boolean(registerStore.emailError)}
          helperText={registerStore.emailError}
          value={registerStore.email}
          onChange={registerStore.changeEmail}
				/>
				<TextField
					label='Имя/Никнейм'
					type='text'
          error={Boolean(registerStore.fullNameError)}
          helperText={registerStore.fullNameError}
          value={registerStore.fullName}
          onChange={registerStore.changeFullName}
				/>
				<TextField
					label='Пароль'
					type='password'
          error={Boolean(registerStore.passwordError)}
          helperText={registerStore.passwordError}
          value={registerStore.password}
          onChange={registerStore.changePassword}
				/>
				<div className='register-form__buttons-wrapper'>
					<LoadingButton 
          endIcon={<CheckIcon />} 
          variant='contained' 
          loading={registerStore.isLoading}
          loadingPosition='end'
          ref={successButton}
          onClick={successRegister}
          >
            Регистрация
					</LoadingButton>
					<Button
						variant='outlined'
            onClick={registerStore.refreshForm}
					>
            Сброс
					</Button>
				</div>
			</form>
      {registerStore.registerError &&
      <Typography color='error'>{registerStore.registerError}</Typography>
      }
		</div>
	);
};

export default observer(RegisterForm);
