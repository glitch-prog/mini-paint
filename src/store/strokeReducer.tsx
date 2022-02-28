const defaultStrokeState = {
  size: '50',
};

export const strokeReducer = (
  state = defaultStrokeState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'CHANGE_STROKE':
      return { ...state, size: action.payload };

    default:
      return state;
  }
};
