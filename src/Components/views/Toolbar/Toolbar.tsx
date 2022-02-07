import React from 'react';
import { IToolbar } from './Toolbar.interface';

export function ToolbarView({
  active,
  handleClickSetAction,
  handleClickSetTool,
}: IToolbar) {
  
  return (
    <div>
      {active ? (
        <>
          <button onClick={handleClickSetTool}>Brush</button>
          <button onClick={handleClickSetTool}>Rectangle</button>
          <button onClick={handleClickSetTool}>Circle</button>
          <button onClick={handleClickSetTool}>Straight Line</button>
          <button onClick={handleClickSetAction}>Close</button>
        </>
      ) : (
        <>
          <button onClick={handleClickSetAction}>Tools</button>
        </>
      )}
    </div>
  );
}
