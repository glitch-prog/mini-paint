const defaultIsAuthorizedState = {
  auth: true,
};

export const isAuthorizedReducer = (state = defaultIsAuthorizedState, action: { type: string; payload: boolean }) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, auth: action.payload };

    case 'GET_AUTH':
      return { ...state, auth: action.payload };

    default:
      return state;
  }
};
