import { StringLiteralLike } from 'typescript';

export interface IColorInput {
  color: string;
  handleChangeColor: (event: { target: { value: string } }) => void;
}
