import React from 'react';
import { ISignIn } from './SignIn.interface';

import { Link } from 'react-router-dom';
import { SIGN_UP_PAGE } from '../../../constants/constants';
// import styles from './Login.module.css';

export function SignInView({
  onChangePassword,
  onChangeEmail,
  onClickLogin,
}: ISignIn) {
  return (
    <div>
      <div>
        <div>
          <h3> Sign in </h3>
          <div>
            <p>Email</p>
            <input placeholder='Enter your email...' onChange={onChangeEmail} />
          </div>
          <div>
            <p>Password</p>
            <input
              placeholder='Enter your password...'
              type='password'
              onChange={onChangePassword}
            />
          </div>
          <button onClick={onClickLogin}> Sign in</button>
        </div>
        <div>
          <Link to={SIGN_UP_PAGE}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
