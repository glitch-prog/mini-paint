import { combineReducers, createStore } from '@reduxjs/toolkit';
import { colorReducer } from './colorReducer';
import { galleryReducer } from './galleryReducer';
import { strokeReducer } from './strokeReducer';
import { toolReducer } from './toolReducer';
import { savedImageReducer } from './savedImgReducer';
import { isAuthorizedReducer } from './isAuthorizedReducer';

const rootReducer = combineReducers({
  color: colorReducer,
  tool: toolReducer,
  gallery: galleryReducer,
  stroke: strokeReducer,
  img: savedImageReducer,
  auth: isAuthorizedReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
