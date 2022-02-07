import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP_PAGE, SIGN_IN_PAGE } from '../../../constants/constants';
// import styles from './Start.module.css';

export function Start() {
  return (
    <div >
      <div >
        <h3>Sign up</h3>
        <p>If you have an account, click here</p>
        <button>
          <Link to={SIGN_UP_PAGE} >
            Sign up
          </Link>
        </button>
      </div>

      <div >
        <h3>Sign in</h3>
        <p>If you want to create a new account, click here</p>
        <button>
          <Link to={SIGN_IN_PAGE} >
            Sign in
          </Link>
        </button>
      </div>
    </div>
  );
}
