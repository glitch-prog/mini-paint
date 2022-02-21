import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { StrokeSizeInputView } from '../../views/StrokeSizeInput/StrokeSizeInput';

export const StrokeSizeInputContainer = () => {
  const [size, setSize] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChangeStrokeSize = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
    dispatch({ type: 'CHANGE_STROKE', payload: event.target.value });
  };

  return <StrokeSizeInputView strokeSize={size} handleChangeStrokeSize={handleChangeStrokeSize} />;
};
