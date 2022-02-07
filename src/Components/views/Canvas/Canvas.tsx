import React from 'react';
import { ICanvasView } from './Canvas.interfaces';

export function CanvasView({
  startDrawing,
  finishDrawing,
  draw,
  canvasRef,
  handleClickSetSaved
}: ICanvasView) {
  return (
    <div>
      <canvas
        width='600px'
        height='400px'
        style={{border:'1px solid #000'}}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <button onClick={handleClickSetSaved}>Save</button>
    </div>
  );
}
