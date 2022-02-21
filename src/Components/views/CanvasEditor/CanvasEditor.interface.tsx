import React, { MouseEventHandler, SetStateAction } from 'react';

export interface ICanvasEditor {
  createImage: () => void;
  handleClickSetTool: (event: { target: { textContent: string } }) => void;
  handleClickSetSaved: () => void;
}
