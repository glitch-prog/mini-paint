import React from 'react';

export interface ICanvasEditor {
  createImage: () => void;
  handleClickSetTool: (event: React.MouseEvent<HTMLLabelElement>) => void;
  handleClickSetSaved: () => void;
}
