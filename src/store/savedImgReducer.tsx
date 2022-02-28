import { PayloadAction } from '@reduxjs/toolkit';

const defaultSavedImageState = {
  image: '',
};

export const savedImageReducer = (state = defaultSavedImageState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'ADD_IMG':
      return { ...state, image: action.payload };

    case 'GET_IMAGE':
      return { ...state, image: action.payload };

    default:
      return state;
  }
};
