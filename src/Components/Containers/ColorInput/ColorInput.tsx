import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorInputView } from '../../views/ColorInput/ColorInput';
import { IColorInput } from './ColorInput.interface';

export function ColorInputContainer() {
  const dispatch = useDispatch();
  const color = useSelector<any>((state) => state.color.color);

  console.log(color);
  const handleChangeColor = (event: { target: { value: any } }) => {
    dispatch({ type: 'CHANGE_COLOR', payload: event.target.value });
  };

  return (
    <div>
      <ColorInputView color={color} handleChangeColor={handleChangeColor} />
    </div>
  );
}
