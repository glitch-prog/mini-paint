import { PayloadAction } from '@reduxjs/toolkit';
import { SetStateAction } from 'react';


const defaultGalleryState = {
  cards:[] ,
};

export const galleryReducer = (
  state = defaultGalleryState,
  action:PayloadAction<any>
) => {
  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };

    case 'GET_CARDS':
      return { ...state, cards: action.payload };

    default:
      return state;
  }
};
