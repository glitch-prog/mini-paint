import React from 'react';
import { IStrokeSizeInput } from './StrokeSizeInput.interface';
import './StrokeSize.css';

export function StrokeSizeInputView({
  strokeSize,
  handleChangeStrokeSize,
}: IStrokeSizeInput) {
  console.log(strokeSize.toString());
  return (
    <div>
      <input
        className='stroke__input'
        type='range'
        value={strokeSize.toString()}
        onChange={handleChangeStrokeSize}
      />
    </div>
  );
}
