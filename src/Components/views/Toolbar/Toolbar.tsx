import React from 'react';
import { IToolbar } from './Toolbar.interface';
import './Toolbar.css';
import brush from './img/Brush.png';
import rectangle from './img/Rectangle.png';
import circle from './img/Circle.png';
import line from './img/Line.png';

export const ToolbarView = ({ handleClickSetTool }: IToolbar) => {
  return (
    <div className="toolbar">
      <button className="Brush" onClick={handleClickSetTool}>
        <img src={brush} alt="Brush" />
      </button>
      <button className="Rectangle" onClick={handleClickSetTool}>
        <img src={rectangle} alt="Rectangle" />
      </button>
      <button className="Circle" onClick={handleClickSetTool}>
        <img src={circle} alt="Circle" />
      </button>
      <button className="Straight line" onClick={handleClickSetTool}>
        <img src={line} alt="Straight Line" />
      </button>
    </div>
  );
};
