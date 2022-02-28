import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import { CanvasView } from '../../views/Canvas/Canvas';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

export const CanvasContainer = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color.color);
  const tool = useAppSelector((state) => state.tool.tool);
  const strokeSize = useAppSelector((state) => state.stroke.size);
  const saved = useAppSelector((state) => state.img.image);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [startPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const startDrawing = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (contextRef.current != null) {
      contextRef.current.beginPath();
    }
    setIsDrawing(true);
    const startX = event.pageX - target.offsetLeft;
    const startY = event.pageY - target.offsetTop;
    setPosition({ x: startX, y: startY });
    // setSaved(canvasRef.current?.toDataURL());
    dispatch({ type: 'ADD_IMG', payload: canvasRef.current?.toDataURL() });
  };

  const finishDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
    dispatch({ type: 'ADD_IMG', payload: canvasRef.current?.toDataURL() });
  };

  function setBrush(currentX: number, currentY: number, img: HTMLImageElement) {
    img.src = saved as unknown as string;
    img.onload = async function () {
      contextRef.current?.lineTo(currentX, currentY);
      contextRef.current?.stroke();
    };
  }

  function setRectangle(width: number, height: number, canvas: HTMLCanvasElement, img: HTMLImageElement) {
    img.src = saved as unknown as string;
    img.onload = async function () {
      if (contextRef.current !== null) {
        contextRef.current.clearRect(0, 0, canvas?.width, canvas?.height);
        contextRef.current.drawImage(img, 0, 0, canvas?.width, canvas?.height);
        contextRef.current.beginPath();
        contextRef.current.rect(startPosition.x, startPosition.y, width, height);
        contextRef.current.fillStyle = color;
        contextRef.current.fill();
      }
    };
  }

  function setCircle(width: number, height: number, currentX: number, currentY: number, canvas: HTMLCanvasElement, img: HTMLImageElement) {
    img.src = saved as unknown as string;
    img.onload = async function () {
      if (null !== contextRef.current) {
        contextRef.current.clearRect(0, 0, canvas?.width, canvas?.height);
        contextRef.current.drawImage(img, 0, 0, canvas?.width, canvas?.height);
        const r = Math.sqrt(width ** 2 + height ** 2);
        contextRef.current.beginPath();
        contextRef.current.arc(currentX, currentY, r, 0, 2 * Math.PI);
        contextRef.current.fillStyle = color;
        contextRef.current.fill();
      }
    };
  }

  function setStraightLine(width: number, height: number, currentX: number, currentY: number, canvas: HTMLCanvasElement, img: HTMLImageElement) {
    img.src = saved as unknown as string;
    img.onload = async function () {
      if (contextRef.current !== null) {
        contextRef.current.clearRect(0, 0, canvas?.width, canvas?.height);
        contextRef.current.drawImage(img, 0, 0, canvas?.width, canvas?.height);
        contextRef.current.beginPath();
        contextRef.current.moveTo(startPosition.x, startPosition.y);
        contextRef.current.lineTo(currentX, currentY);
        contextRef.current.stroke();
      }
    };
  }

  const draw = (event: React.MouseEvent<HTMLElement>) => {
    if (!isDrawing) {
      return;
    }
    const target = event.target as HTMLElement;

    const canvas = canvasRef.current;
    const currentX = event.pageX - target.offsetLeft;
    const currentY = event.pageY - target.offsetTop;
    const width = currentX - startPosition.x;
    const height = currentY - startPosition.y;
    const img = new Image();
    if (canvas !== null) {
      switch (tool) {
        case 'Brush':
          setBrush(currentX, currentY, img);
          break;

        case 'Rectangle':
          setRectangle(width, height, canvas, img);
          break;

        case 'Circle':
          setCircle(width, height, currentX, currentY, canvas, img);
          break;
        case 'Straight Line':
          setStraightLine(width, height, currentX, currentY, canvas, img);
          break;
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    // context!.lineCap = 'butt';
    // context!.scale(2, 2);
    context!.lineCap = 'round';
    context!.strokeStyle = color;
    context!.lineWidth = +strokeSize;
    if (context) {
      contextRef.current = context;
    }
  }, [color, strokeSize]);

  return (
    <div>
      <CanvasView startDrawing={startDrawing} finishDrawing={finishDrawing} draw={draw} canvasRef={canvasRef} />
    </div>
  );
};
