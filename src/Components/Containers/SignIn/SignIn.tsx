import React from 'react';
import { SignInView } from '../../views/SignIn/SignIn';
import { auth } from '../../../config/firebase-config';
import { CANVAS_PAGE } from '../../../constants/constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { ErrorMessageView } from '../../views/ErrorMessage/ErrorMessage';

export function SignInContainer() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleOnChangeEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLoginEmail(event.target.value);
  };

  const handleOnChangePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLoginPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate(CANVAS_PAGE);
    } catch (error: any) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      {/* <ErrorMessageView /> */}
      <SignInView
        onChangeEmail={handleOnChangeEmail}
        onChangePassword={handleOnChangePassword}
        onClickLogin={handleLoginClick}
      />
    </div>
  );
}
