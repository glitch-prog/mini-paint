import { ISignUp } from "./SignUp.interface";

export function SignUpView({
  handleOnChangeRegisterEmail,
  handleOnChangeRegisterPassword,
  register,
}:ISignUp) {
  return (
    <div>
      <div>
        <h3> Sign up </h3>
        <div>
          <p>Email</p>
          <input
            placeholder='Enter your email address...'
            onChange={handleOnChangeRegisterEmail}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            placeholder='Enter your password...'
            type='password'
            onChange={handleOnChangeRegisterPassword}
          />
        </div>

        <button onClick={register}> Sign up </button>
      </div>

      {/* <div>
        <Link to={LOGIN_PAGE} className={styles.link}>
          Sign in
        </Link>
      </div> */}
    </div>
  );
}
