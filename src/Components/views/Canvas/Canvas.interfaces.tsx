import { MouseEventHandler } from 'react';
import { AnyIfEmpty } from 'react-redux';
import { IEvent, INativeElement, ITest } from '../../containers/Canvas/Canvas.interfaces';

export interface ICanvasView {
  startDrawing: MouseEventHandler<Element>;
  finishDrawing: () => void;
  draw: MouseEventHandler<Element>;
  canvasRef: React.LegacyRef<HTMLCanvasElement>;
}
