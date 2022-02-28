import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { ColorInputView } from '../../views/ColorInput/ColorInput';
import { IColorInput } from './ColorInput.interface';

export function ColorInputContainer() {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color.color);

  const handleChangeColor = (event: { target: { value: string } }) => {
    dispatch({ type: 'CHANGE_COLOR', payload: event.target.value });
  };

  return <ColorInputView color={color} handleChangeColor={handleChangeColor} />;
}
