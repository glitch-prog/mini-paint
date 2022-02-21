import React from 'react';
import { useDispatch } from 'react-redux';
import { ToolbarView } from '../../views/Toolbar/Toolbar';

export const ToolbarContainer = () => {
  const dispatch = useDispatch();

  const handleClickSetTool = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLImageElement;
    dispatch({ type: 'CHANGE_TOOL', payload: target.alt });
  };

  return <ToolbarView handleClickSetTool={handleClickSetTool} />;
};
