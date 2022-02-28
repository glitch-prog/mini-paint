import React from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../config/firebase-config';
import { SIGN_IN_PAGE } from '../../../constants/constants';

export const LogoutBtn = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <button onClick={logout}>
      <Link to={SIGN_IN_PAGE}>Logout</Link>
    </button>
  );
};
