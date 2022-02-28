import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { StrokeSizeInputView } from '../../views/StrokeSizeInput/StrokeSizeInput';

export function StrokeSizeInputContainer() {
  const [size, setSize] = useState<string>('');
  const dispatch = useAppDispatch();
  const strokeSize = useAppSelector((state) => state.stroke.size);

  const handleChangeStrokeSize = (event: { target: { value: string } }) => {
    setSize(event.target.value);
    dispatch({ type: 'CHANGE_STROKE', payload: event.target.value });
    
  };

  return (
    <div>
      <StrokeSizeInputView
        strokeSize={size}
        handleChangeStrokeSize={handleChangeStrokeSize}
      />
    </div>
  );
}
