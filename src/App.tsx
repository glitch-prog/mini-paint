import React from 'react';

import { Routes, Route } from 'react-router-dom';
import {
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
  CANVAS_PAGE,
  GALLERY_PAGE,
} from './constants/constants';
import { SignInContainer } from './Components/Containers/SignIn/SignIn';
import { SignUpContainer } from './Components/Containers/SignUp/SignUp';
import { Start } from './Components/views/Start/Start';
import { CanvasEditorContainer } from './Components/Containers/CanvasEditor/CanvasEditor';
import { CanvasGalleryContainer } from './Components/Containers/CanvasGallery/CanvasGallery';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={SIGN_IN_PAGE} element={<SignInContainer />} />
        <Route path={SIGN_UP_PAGE} element={<SignUpContainer />} />
        <Route path={CANVAS_PAGE} element={<CanvasEditorContainer />} />
        <Route path={GALLERY_PAGE} element={<CanvasGalleryContainer />} />
        <Route path='/' element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
