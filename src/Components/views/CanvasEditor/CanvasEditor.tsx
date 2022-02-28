import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_PAGE } from '../../../constants/constants';
import { CanvasContainer } from '../../containers/Canvas/Canvas';
import { ColorInputContainer } from '../../containers/ColorInput/ColorInput';
import { StrokeSizeInputContainer } from '../../containers/StrokeSizeInput/StrokeSizeInput';
import { ToolbarContainer } from '../../containers/Toolbar/Toolbar';
import { ICanvasEditor } from './CanvasEditor.interface';
import styles from './Canvas.module.css';
import { LogoutBtn } from '../../containers/LogoutBtn/LogoutBtn';

export const CanvasEditorView = ({ createImage, handleClickSetSaved }: ICanvasEditor) => {
  return (
    <div className={styles.wrapper}>
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
          <Link className={styles.canvas_link} to={GALLERY_PAGE}>
            Gallery
          </Link>
        </button>
      </div>
      <CanvasContainer />
      <LogoutBtn />
    </div>
  );
};
