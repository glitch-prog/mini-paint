import { combineReducers, createStore } from '@reduxjs/toolkit';
import { colorReducer } from './colorReducer';
import { galleryReducer } from './galleryReducer';
import { toolReducer } from './toolReducer';

const rootReducer = combineReducers({
  color: colorReducer,
  tool: toolReducer,
  gallery: galleryReducer,
});

export const store = createStore(rootReducer);
