import React from 'react';
import { Navigate } from 'react-router-dom';
import { SIGN_IN_PAGE } from '../constants/constants';
import { useAppSelector } from '../hooks/hooks';
import { IChildren } from './PrivateRout.interface';

export const PrivateRoute = ({ children }: IChildren) => {
  const isAuthorized = useAppSelector((state) => state.auth.auth);

  return isAuthorized ? children : <Navigate to={SIGN_IN_PAGE} />;
};
