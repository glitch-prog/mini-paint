import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToolbarView } from '../../views/Toolbar/Toolbar';
import { IToolbar } from './Toolbar.interface';

export function ToolbarContainer() {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const tool = useSelector<any>((state) => state.tool);
  const handleClickSetTool = (event: any) => {
    dispatch({ type: 'CHANGE_TOOL', payload: event.target.textContent });
  };
  const handleClickSetAction = () => {
    setActive(!active);
  };
  console.log(tool);
  return (
    <div>
      <ToolbarView
        active={active}
        handleClickSetAction={handleClickSetAction}
        handleClickSetTool={handleClickSetTool}
      />
    </div>
  );
}
