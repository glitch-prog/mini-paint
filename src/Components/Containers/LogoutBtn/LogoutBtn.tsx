import React from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../config/firebase-config';
import { SIGN_IN_PAGE } from '../../../constants/constants';
import { ILogoutBtn } from './LogoutBtn.interface';

export const LogoutBtn = ({ className }: ILogoutBtn) => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <button className={className} onClick={logout}>
      <Link className="link" to={SIGN_IN_PAGE}>
        Logout
      </Link>
    </button>
  );
};
