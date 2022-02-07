import { MouseEventHandler } from 'react';

export interface ICanvasEditor {
  saved: string;
  setSaved: any;
  createImage: any;
  strokeSize: string;
  setStrokeSize: React.SetStateAction<any>;
  handleClickSetTool: (event: any) => void;
}


