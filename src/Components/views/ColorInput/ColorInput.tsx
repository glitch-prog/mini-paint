import React from 'react';
import { IColorInput } from './ColorInput.interface';

export const ColorInputView = ({ handleChangeColor, color }: IColorInput) => {
  return <input type="color" onChange={handleChangeColor} value={color} />;
};
