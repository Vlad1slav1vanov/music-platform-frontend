import React from 'react';
import PageTitle from 'shared/UI/PageTitle';
import RegisterForm from 'widgets/register-form';
import './styles/index.scss';

const RegisterPage: React.FC = () => (
	<div className='register-page'>
		<PageTitle>Регистрация</PageTitle>
		<RegisterForm/>
	</div>
);

export default RegisterPage;
