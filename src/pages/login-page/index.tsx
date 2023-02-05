import React from 'react';
import PageTitle from 'shared/UI/PageTitle';
import LoginForm from 'widgets/login-form';
import './styles/index.scss';

const LoginPage: React.FC = () => {
  return (
    <div className='login-page'>
      <PageTitle>Вход</PageTitle>
      <LoginForm />
    </div>
  )
};

export default LoginPage;
