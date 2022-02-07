import React, { useEffect, useRef, useState } from 'react';
// import { useCanvas } from './CanvasContext';
// import rough from 'roughjs';

import { ICanvasContainer, INativeElement } from './Canvas.interfaces';

import { CanvasView } from '../../views/Canvas/Canvas';
import { useDispatch, useSelector } from 'react-redux';

export function CanvasContainer({
  strokeSize,

  saved,
  setSaved,
  createImage,
}: ICanvasContainer) {
  const dispatch = useDispatch();
  const color = useSelector<any>((state) => state.color.color);
  const tool = useSelector<any>((state) => state.tool.tool);

  const canvasRef = useRef<any>(null);
  const contextRef = useRef<any>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [startPosition, setPosition] = useState<any>({
    x: 0,
    y: 0,
  });

  const startDrawing = (event: {
    pageX: number;
    target: { offsetLeft: number; offsetTop: number };
    pageY: number;
  }) => {
    // const { offsetX, offsetY } = nativeEvent;
    if (contextRef.current != null) {
      contextRef.current.beginPath();
      // contextRef.current.moveTo(offsetX, offsetY);
    }
    setIsDrawing(true);
    let startX = event.pageX - event.target.offsetLeft;
    let startY = event.pageY - event.target.offsetTop;
    setPosition({ x: startX, y: startY });
    setSaved(canvasRef.current.toDataURL());
    console.log(startPosition);
    console.log(saved);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setSaved(canvasRef.current.toDataURL());
  };

  const draw = (event: {
    pageX: number;
    target: { offsetLeft: number; offsetTop: number };
    pageY: number;
  }) => {
    if (!isDrawing) {
      return;
    }
    const canvas: any = canvasRef.current;
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
          contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
          contextRef.current.drawImage(img, 0, 0, canvas.width, canvas.height);
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
          contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
          contextRef.current.drawImage(img, 0, 0, canvas.width, canvas.height);
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
          contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
          contextRef.current.drawImage(img, 0, 0, canvas.width, canvas.height);
          contextRef.current.beginPath();
          contextRef.current.moveTo(startPosition.x, startPosition.y);
          contextRef.current.lineTo(currentX, currentY);
          contextRef.current.stroke();
        };
        break;
    }
  };

  const handleClickSetSaved = () => {
    // setSaved(canvasRef.current.toDataURL());

    const card = {
      
    }
    dispatch({type:'ADD_CARD',payload:card})
    createImage();
  };

  useEffect(() => {
    console.log('useEffect');
    const canvas: any = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    // context.scale(2, 2);
    // context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = +strokeSize;
    contextRef.current = context;
  }, [color, strokeSize]);

  return (
    <div>
      <CanvasView
        startDrawing={startDrawing}
        finishDrawing={finishDrawing}
        draw={draw}
        handleClickSetSaved={handleClickSetSaved}
        canvasRef={canvasRef}
      />
    </div>
  );
}
