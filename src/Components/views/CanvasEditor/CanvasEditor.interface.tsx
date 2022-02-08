import React, { MouseEventHandler, SetStateAction } from 'react';

export interface ICanvasEditor {
  saved: string;
  setSaved: SetStateAction<any>;
  createImage: () => void;
  handleClickSetTool: (event: { target: { textContent: string } }) => void;
  handleClickSetSaved: (event:any) => void;
}
