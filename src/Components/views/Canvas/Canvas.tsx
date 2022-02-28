import React from 'react';
import { ICanvasView } from './Canvas.interfaces';
import './Canvas.css';

export function CanvasView({
  startDrawing,
  finishDrawing,
  draw,
  canvasRef,
}: ICanvasView) {
  return (
    <div>
      <canvas
        className='canvas'
        width='600px'
        height='400px'
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}
