import React from 'react';
import { StrokeSizeInputView } from '../../views/StrokeSizeInput/StrokeSizeInput';
import { IStrokeSizeInput } from './StrokeSizeInput.interface';

export function StrokeSizeInputContainer({
  strokeSize,
  setStrokeSize,
}: IStrokeSizeInput) {
  const handleChangeStrokeSize = (event: { target: { value: any; }; }) => {
    setStrokeSize(event.target.value);
  };

  return (
    <div>
      <StrokeSizeInputView
        strokeSize={strokeSize}
        handleChangeStrokeSize={handleChangeStrokeSize}
      />
    </div>
  );
}
