import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface ISignIn {
  onChangeEmail: ChangeEventHandler<HTMLInputElement>;
  onChangePassword: ChangeEventHandler<HTMLInputElement>;
  onClickLogin: MouseEventHandler<HTMLButtonElement>;
}
