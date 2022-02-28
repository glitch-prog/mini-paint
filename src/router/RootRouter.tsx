import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SIGN_IN_PAGE, SIGN_UP_PAGE, CANVAS_PAGE, GALLERY_PAGE } from '../constants/constants';
import { SignInContainer } from '../Components/containers/SignIn/SignIn';
import { SignUpContainer } from '../Components/containers/SignUp/SignUp';
import { Start } from '../Components/views/Start/Start';
import { CanvasEditorContainer } from '../Components/containers/CanvasEditor/CanvasEditor';
import { CanvasGalleryContainer } from '../Components/containers/CanvasGallery/CanvasGallery';
import { PrivateRoute } from './PrivateRoute';

export function RootRouter() {
  return (
    <Routes>
      <Route path={SIGN_IN_PAGE} element={<SignInContainer />} />
      <Route path={SIGN_UP_PAGE} element={<SignUpContainer />} />
      <Route
        path={CANVAS_PAGE}
        element={
          <PrivateRoute>
            <CanvasEditorContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={GALLERY_PAGE}
        element={
          <PrivateRoute>
            <CanvasGalleryContainer />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Start />} />
    </Routes>
  );
}
