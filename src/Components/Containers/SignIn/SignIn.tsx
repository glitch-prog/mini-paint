import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { CANVAS_PAGE } from '../../../constants/constants';
import { auth } from '../../../config/firebase-config';
import { SignInView } from '../../views/SignIn/SignIn';
import { useAppDispatch } from '../../../hooks/hooks';

export const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginEmail(event.target.value);
  };

  const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      dispatch({ type: 'SET_USER', payload: user });
      dispatch({ type: 'SET_AUTH', payload: true });

      navigate(CANVAS_PAGE);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      {/* <ErrorMessageView /> */}
      <SignInView onChangeEmail={handleOnChangeEmail} onChangePassword={handleOnChangePassword} onClickLogin={handleLoginClick} />
    </div>
  );
};
