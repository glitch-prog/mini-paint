import React from 'react';
import { IStrokeSizeInput } from './StrokeSizeInput.interface';
import './StrokeSize.css';

export const StrokeSizeInputView = ({ strokeSize, handleChangeStrokeSize }: IStrokeSizeInput) => {
  return <input className="stroke__input" type="range" value={strokeSize.toString()} onChange={handleChangeStrokeSize} />;
};
