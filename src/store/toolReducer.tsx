const defaultToolState = {
  tool: 'Brush',
};

export const toolReducer = (
  state = defaultToolState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'CHANGE_TOOL':
      return { ...state, tool: action.payload };

    default:
      return state;
  }
};
