import React from 'react';
import { IStrokeSizeInput } from './StrokeSizeInput.interface';

export function StrokeSizeInputView({
  strokeSize,
  handleChangeStrokeSize,
}: IStrokeSizeInput) {
  return (
    <div>
      <input
        type='range'
        value={strokeSize}
        onChange={handleChangeStrokeSize}
      />
    </div>
  );
}
