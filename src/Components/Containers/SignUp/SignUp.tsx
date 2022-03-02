import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase-config';
import { SignUpView } from '../../views/SignUp/SignUp';
import { CANVAS_PAGE } from '../../../constants/constants';
import { useAppDispatch } from '../../../hooks/hooks';

export const SignUpContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      dispatch({ type: 'SET_USER', payload: user });
      navigate(CANVAS_PAGE);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const handleOnChangeRegisterEmail = (event: React.ChangeEvent<HTMLInputElement>) => setRegisterEmail(event.target.value);

  const handleOnChangeRegisterPassword = (event: React.ChangeEvent<HTMLInputElement>) => setRegisterPassword(event.target.value);

  return <SignUpView handleOnChangeRegisterEmail={handleOnChangeRegisterEmail} handleOnChangeRegisterPassword={handleOnChangeRegisterPassword} register={register} />;
};
