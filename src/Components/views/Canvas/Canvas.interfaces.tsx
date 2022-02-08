import { MouseEventHandler } from 'react';
import { AnyIfEmpty } from 'react-redux';
import {
  IEvent,
  INativeElement,
  ITest,
} from '../../Containers/Canvas/Canvas.interfaces';

export interface ICanvasView {
  startDrawing: MouseEventHandler<Element>;
  finishDrawing: () => void;

  // draw: MouseEventHandler<Element>;
  draw:(event:any)=>void;

  handleClickSetSaved: () => void;

  canvasRef: React.LegacyRef<HTMLCanvasElement>;
}
