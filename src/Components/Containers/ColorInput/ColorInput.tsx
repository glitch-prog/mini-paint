import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { ColorInputView } from '../../views/ColorInput/ColorInput';
import { IColorInput } from './ColorInput.interface';

export function ColorInputContainer() {
 const dispatch = useAppDispatch()
  const color = useAppSelector((state) => state.color.color);

  console.log(color);
  const handleChangeColor = (event:{target:{value:React.SetStateAction<string>}}
  ) => {
    dispatch({ type: 'CHANGE_COLOR', payload: event.target.value });
  };

  return (
    <div>
      <ColorInputView color={color} handleChangeColor={handleChangeColor} />
    </div>
  );
}
