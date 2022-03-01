const defaultUserState = {
  user: null,
};

export const userReducer = (state = defaultUserState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
