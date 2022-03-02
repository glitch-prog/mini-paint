import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { ColorInputView } from '../../views/ColorInput/ColorInput';

export function ColorInputContainer() {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color.color);

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_COLOR', payload: event.target.value });
  };

  return <ColorInputView color={color} handleChangeColor={handleChangeColor} />;
}
