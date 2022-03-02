import { MouseEventHandler } from 'react';

export interface ICanvasView {
  startDrawing: MouseEventHandler<Element>;
  finishDrawing: () => void;
  draw: MouseEventHandler<Element>;
  canvasRef: React.LegacyRef<HTMLCanvasElement>;
}
