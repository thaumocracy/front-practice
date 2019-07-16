import React from 'react';
import './RegisterPage.scss'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const RegisterPage = () => {
  return (
    <div className="register">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default RegisterPage;