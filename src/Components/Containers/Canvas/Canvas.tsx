import React, { ContextType, useEffect, useRef, useState } from 'react';
// import { useCanvas } from './CanvasContext';
// import rough from 'roughjs';

import { ICanvasContainer, IEvent, INativeElement } from './Canvas.interfaces';

import { CanvasView } from '../../views/Canvas/Canvas';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

export function CanvasContainer({
  saved,
  setSaved,

}: ICanvasContainer) {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color.color);
  const tool = useAppSelector((state) => state.tool.tool);
  const strokeSize = useAppSelector((state) => state.stroke.size);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<any>(null!);

  const [isDrawing, setIsDrawing] = useState(false);
  const [startPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const startDrawing = (event: any) => {
    // const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current != null) {
      contextRef.current.beginPath();
      // contextRef.current.moveTo(offsetX, offsetY);
    }
    setIsDrawing(true);
    let startX = event.pageX - event.target.offsetLeft;
    let startY = event.pageY - event.target.offsetTop;
    setPosition({ x: startX, y: startY });
    setSaved(canvasRef.current?.toDataURL());
    
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setSaved(canvasRef.current?.toDataURL());
  };

  const draw = (event: IEvent) => {
    if (!isDrawing) {
      return;
    }
    const canvas = canvasRef.current;
    let currentX = event.pageX - event.target.offsetLeft;
    let currentY = event.pageY - event.target.offsetTop;
    const width = currentX - startPosition.x;
    const height = currentY - startPosition.y;
    const img = new Image();
    switch (tool) {
      case 'Brush':
        img.src = saved;
        img.onload = async function () {
          contextRef.current.lineTo(currentX, currentY);
          contextRef.current.stroke();
        };
        break;

      case 'Rectangle':
        img.src = saved;
        img.onload = async function () {
          contextRef.current.clearRect(0, 0, canvas?.width, canvas?.height);
          contextRef.current.drawImage(
            img,
            0,
            0,
            canvas?.width,
            canvas?.height
          );
          contextRef.current.beginPath();
          contextRef.current.rect(
            startPosition.x,
            startPosition.y,
            width,
            height
          );
          contextRef.current.fillStyle = color;
          contextRef.current.fill();
        };
        break;

      case 'Circle':
        img.src = saved;
        img.onload = async function () {
          contextRef.current.clearRect(0, 0, canvas?.width, canvas?.height);
          contextRef.current.drawImage(
            img,
            0,
            0,
            canvas?.width,
            canvas?.height
          );
          let r = Math.sqrt(width ** 2 + height ** 2);
          contextRef.current.beginPath();
          contextRef.current.arc(currentX, currentY, r, 0, 2 * Math.PI);
          contextRef.current.fillStyle = color;
          contextRef.current.fill();
        };
        break;
      case 'Straight Line':
        img.src = saved;
        img.onload = async function () {
          contextRef.current.clearRect(0, 0, canvas?.width, canvas?.height);
          contextRef.current.drawImage(
            img,
            0,
            0,
            canvas?.width,
            canvas?.height
          );
          contextRef.current.beginPath();
          contextRef.current.moveTo(startPosition.x, startPosition.y);
          contextRef.current.lineTo(currentX, currentY);
          contextRef.current.stroke();
        };
        break;
    }
  };

  

  useEffect(() => {
   
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const context = canvas?.getContext('2d');
    context!.lineCap = 'round';
    // context!.scale(2, 2);
    // context!.lineCap = 'round';
    context!.strokeStyle = color;
    context!.lineWidth = +strokeSize;
    contextRef.current = context;
  }, [color, strokeSize]);

  return (
    <div>
      <CanvasView
        startDrawing={startDrawing}
        finishDrawing={finishDrawing}
        draw={draw}
       
        canvasRef={canvasRef}
      />
    </div>
  );
}
