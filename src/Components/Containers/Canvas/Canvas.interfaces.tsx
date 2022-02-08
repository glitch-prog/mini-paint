import { SetStateAction } from 'react';

export interface INativeElement {
  nativeEvent: { offsetX: any; offsetY: any };
}

export interface ITest {
  x: number;
  y: number;
}

export interface ICanvasContainer {
  saved: string;
  setSaved: (arg: string | undefined) => void;
  createImage: ()=>void;
}

export interface IEvent {
  pageX: number;
  target: { offsetLeft: number; offsetTop: number };
  pageY: number;
}
