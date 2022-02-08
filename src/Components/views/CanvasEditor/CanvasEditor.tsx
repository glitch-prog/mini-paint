import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GALLERY_PAGE } from '../../../constants/constants';
import { CanvasContainer } from '../../Containers/Canvas/Canvas';
import { ColorInputContainer } from '../../Containers/ColorInput/ColorInput';
import { StrokeSizeInputContainer } from '../../Containers/StrokeSizeInput/StrokeSizeInput';
import { ToolbarContainer } from '../../Containers/Toolbar/Toolbar';
import { ICanvasEditor } from './CanvasEditor.interface';

export function CanvasEditorView({
  saved,
  setSaved,
  createImage,
 
}: ICanvasEditor) {
  return (
    <div>
      <ColorInputContainer />
      <StrokeSizeInputContainer/>
      <ToolbarContainer />
      <CanvasContainer
       
        saved={saved}
        setSaved={setSaved}
        createImage={createImage}
      />
      <Link to={GALLERY_PAGE}>Gallery</Link>
    </div>
  );
}
