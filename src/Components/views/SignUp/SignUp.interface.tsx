import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface ISignUp {
  handleOnChangeRegisterEmail: ChangeEventHandler<HTMLInputElement>;
  handleOnChangeRegisterPassword: ChangeEventHandler<HTMLInputElement>;
  register: MouseEventHandler<HTMLButtonElement>;
}
