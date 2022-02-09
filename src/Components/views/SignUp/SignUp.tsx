import { ISignUp } from './SignUp.interface';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { SIGN_IN_PAGE } from '../../../constants/constants';

export function SignUpView({
  handleOnChangeRegisterEmail,
  handleOnChangeRegisterPassword,
  register,
}: ISignUp) {
  return (
    <div className='wrapper'>
      <div>
        <h3> Sign up </h3>
        <div>
          <p>Email</p>
          <input
            className='signup__input'
            placeholder='Enter your email address...'
            onChange={handleOnChangeRegisterEmail}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            className='signup__input'
            placeholder='Enter your password...'
            type='password'
            onChange={handleOnChangeRegisterPassword}
          />
        </div>

        <button className='signup__btn' onClick={register}>
          Sign up
        </button>
      </div>

      <div>
        <Link to={SIGN_IN_PAGE} className='link'>
          Sign in
        </Link>
      </div>
    </div>
  );
}
