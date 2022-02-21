import React from 'react';
import { Link } from 'react-router-dom';
import { ISignIn } from './SignIn.interface';

import { SIGN_UP_PAGE } from '../../../constants/constants';
import './SignIn.css';

export const SignInView = ({ onChangePassword, onChangeEmail, onClickLogin }: ISignIn) => {
  return (
    <div>
      <div className="wrapper">
        <div>
          <h3> Sign in </h3>
          <div>
            <p>Email</p>
            <input className="signin__input" placeholder="Enter your email..." onChange={onChangeEmail} />
          </div>
          <div>
            <p>Password</p>
            <input className="signin__input" placeholder="Enter your password..." type="password" onChange={onChangePassword} />
          </div>
          <button className="signin__btn" onClick={onClickLogin}>
            {' '}
            Sign in
          </button>
        </div>
        <div>
          <Link className="link" to={SIGN_UP_PAGE}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
