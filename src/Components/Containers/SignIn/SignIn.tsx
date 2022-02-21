import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { FirestoreError } from 'firebase/firestore';
import { CANVAS_PAGE } from '../../../constants/constants';
import { auth } from '../../../config/firebase-config';
import { SignInView } from '../../views/SignIn/SignIn';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
// import { ErrorMessageView } from '../../views/ErrorMessage/ErrorMessage';

export const SignInContainer = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.auth);
  const dispatch = useAppDispatch();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleOnChangeEmail = (event: { target: { value: React.SetStateAction<string> } }) => {
    setLoginEmail(event.target.value);
  };

  const handleOnChangePassword = (event: { target: { value: React.SetStateAction<string> } }) => {
    setLoginPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      dispatch({ type: 'SET_AUTH', payload: !isAuth });
      console.log(isAuth);
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
