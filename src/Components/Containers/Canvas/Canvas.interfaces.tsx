import { SetStateAction } from 'react';

export interface INativeElement {
  nativeEvent: { offsetX: number; offsetY: number };
}

export interface ITest {
  x: number;
  y: number;
}

export interface IEvent {
  pageX: number;
  target: { offsetLeft: number; offsetTop: number; className: string };
  pageY: number;
}

export interface ITool {
  currentX: number;
  currentY: number;
  img: string;
}
