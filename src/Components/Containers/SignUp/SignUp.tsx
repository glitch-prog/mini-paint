import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase-config';
import React from 'react';
import { SignUpView } from '../../views/SignUp/SignUp';
import { CANVAS_PAGE } from '../../../constants/constants';

export function SignUpContainer() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate(CANVAS_PAGE);
    } catch (error:any) {
      console.log(typeof error)
      alert(error.message);
      console.log(error.message);
    }
  };

  const handleOnChangeRegisterEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setRegisterEmail(event.target.value);

  const handleOnChangeRegisterPassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setRegisterPassword(event.target.value);

  return (
    <SignUpView
      handleOnChangeRegisterEmail={handleOnChangeRegisterEmail}
      handleOnChangeRegisterPassword={handleOnChangeRegisterPassword}
      register={register}
    />
  );
}
