import React from 'react';
import { IStrokeSizeInput } from './StrokeSizeInput.interface';

export function StrokeSizeInputView({
  strokeSize,
  handleChangeStrokeSize,
}: IStrokeSizeInput) {
  console.log(strokeSize.toString());
  return (
    <div>
      <input
        type='range'
        value={strokeSize.toString()}
        onChange={handleChangeStrokeSize}
      />
    </div>
  );
}
