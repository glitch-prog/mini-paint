import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP_PAGE, SIGN_IN_PAGE } from '../../../constants/constants';
import './Start.css';

export const Start = () => {
  return (
    <div className="main__block">
      <div className="start__card start__card__sign__up">
        <h3>Sign up</h3>
        <p>If you have an account, click here</p>
        <button>
          <Link className="link" to={SIGN_UP_PAGE}>
            Sign up
          </Link>
        </button>
      </div>

      <div className="start__card start__card__sign__in">
        <h3>Sign in</h3>
        <p>If you want to create a new account, click here</p>
        <button>
          <Link className="link" to={SIGN_IN_PAGE}>
            Sign in
          </Link>
        </button>
      </div>
    </div>
  );
};
