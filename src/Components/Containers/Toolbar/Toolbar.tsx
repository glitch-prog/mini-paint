import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/hooks';
import { ToolbarView } from '../../views/Toolbar/Toolbar';
import { IToolbar } from './Toolbar.interface';

export function ToolbarContainer() {
  const dispatch = useDispatch();
  const tool = useAppSelector((state) => state.tool);
  const handleClickSetTool = (event: any) => {
    dispatch({ type: 'CHANGE_TOOL', payload: event.target.alt });
  };

  return (
    <div>
      <ToolbarView handleClickSetTool={handleClickSetTool} />
    </div>
  );
}
