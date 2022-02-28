import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { GALLERY_PAGE } from '../../../constants/constants';
import { CanvasContainer } from '../../Containers/Canvas/Canvas';
import { ColorInputContainer } from '../../Containers/ColorInput/ColorInput';
import { StrokeSizeInputContainer } from '../../Containers/StrokeSizeInput/StrokeSizeInput';
import { ToolbarContainer } from '../../Containers/Toolbar/Toolbar';
import { ICanvasEditor } from './CanvasEditor.interface';
import styles from './Canvas.module.css';

export function CanvasEditorView({
  saved,
  setSaved,
  createImage,
  handleClickSetSaved,
}: ICanvasEditor) {
  return (
    <div>
      <div className={styles.toolbar}>
        <button className={styles.save__btn} onClick={handleClickSetSaved}>
          Save
        </button>
        <div className={styles.tools}>
          <ColorInputContainer />
          <StrokeSizeInputContainer />
          <ToolbarContainer />
        </div>

        <button className={styles.save__btn}>
          <Link className={styles.link} to={GALLERY_PAGE}>Gallery</Link>
        </button>
      </div>
      <CanvasContainer saved={saved} setSaved={setSaved} />
    </div>
  );
}
