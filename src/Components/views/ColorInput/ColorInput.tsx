import React from 'react';
import { IColorInput } from './ColorInput.interface';

export function ColorInputView({ handleChangeColor, color }: IColorInput) {
  console.log(color);
  return (
    <div>
      <input type='color' onChange={handleChangeColor} value={color} />
    </div>
  );
}
