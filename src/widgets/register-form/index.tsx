import {Avatar, Button, TextField} from '@mui/material';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {useForm} from 'react-hook-form';
import './styles/index.scss';

const RegisterForm: React.FC = () => {
	const [avatarUrl, setAvatarUrl] = React.useState<string>('');
	const avatarInput = React.useRef<HTMLInputElement>(null);

	const {
		register,
		handleSubmit,
		setValue,
		formState: {
			errors,
			isValid,
		}} = useForm({
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			avatar: undefined as undefined | File,
		},
		mode: 'onChange',
	});

	const changeAvatar = (evt: React.ChangeEvent<HTMLInputElement>) => {
		if (evt.target.files) {
			const file = evt.target.files[0];
			setValue('avatar', file);
			const reader = new FileReader();
			reader.onload = e => {
				setAvatarUrl(e?.target?.result as string);
			};

			reader.readAsDataURL(file);
		}
	};

	const deleteAvatar = () => {
		setValue('avatar', undefined);
		setAvatarUrl('');
	};

	const refreshForm = () => {
		deleteAvatar();
		setValue('email', '');
		setValue('password', '');
		setValue('fullName', '');
	};

	return (
		<div className='register-form'>
			<Avatar
				sx={{
					width: 150,
					height: 150,
					background: '#5824f3',
				}}
				src={avatarUrl}
			/>
			<div className='register-form__avatar-buttons'>
				{avatarUrl
					? <Button
						color='error'
						onClick={deleteAvatar}
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
					{...register('avatar')}
					ref={avatarInput}
					onChange={changeAvatar}
				/>
				<TextField
					label='E-mail'
					type='email'
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					{...register('email', {required: 'Укажите почту'})}
				/>
				<TextField
					label='Имя/Никнейм'
					type='text'
					error={Boolean(errors.fullName?.message)}
					helperText={errors.fullName?.message}
					{...register('fullName', {required: 'Укажите свое имя или никнейм'})}
				/>
				<TextField
					label='Пароль'
					type='password'
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					{...register('password', {required: 'Придумайте пароль'})}
				/>
				<div className='register-form__buttons-wrapper'>
					<Button variant='contained'>Регистрация</Button>
					<Button variant='outlined'>Сброс</Button>
				</div>
			</form>
		</div>
	);
};

export default observer(RegisterForm);
