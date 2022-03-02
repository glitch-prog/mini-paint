import React from 'react';
import { ICanvasView } from './Canvas.interfaces';
import './Canvas.css';

export const CanvasView = ({ startDrawing, finishDrawing, draw, canvasRef }: ICanvasView) => {
  return <canvas className="canvas" width="600px" height="400px" onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} onMouseOver={finishDrawing} ref={canvasRef} />;
};
