import { MouseEventHandler } from 'react';
import {
  INativeElement,
  ITest,
} from '../../Containers/Canvas/Canvas.interfaces';

export interface ICanvasView {
  startDrawing: (event: any) => void;
  finishDrawing: () => void;

  draw: (event: any) => void;

  handleClickSetSaved: () => void;

  canvasRef: any;
}
