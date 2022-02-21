import { AnyAction, PayloadAction } from '@reduxjs/toolkit';

interface ICard {
  img: string | undefined;
  uuid: string | undefined;
  user: string | undefined;
  date: string | undefined;
}

interface IDefaultGalleryState {
  cards: ICard[];
}

const defaultGalleryState: IDefaultGalleryState = {
  cards: [],
};

export const galleryReducer = (state = defaultGalleryState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };

    case 'GET_CARDS':
      return { ...state, cards: action.payload };

    default:
      return state;
  }
};
