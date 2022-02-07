const defaultColorState = {
  color: '#000000',
};

export const colorReducer = (
  state = defaultColorState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };

    default:
      return state;
  }
};