import { MouseEventHandler } from 'react';

export interface IToolbar {
  handleClickSetTool: MouseEventHandler<HTMLButtonElement>;
  // handleClickSetTool: (event: { target: { alt: string } }) => void;
}
