import { CHANGE_BORDER_COLOR } from '../actions/buttonAnswer';

const initialState = {
  borderColorChange: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case CHANGE_BORDER_COLOR:
      return { ...state, borderColorChange: true };
    default:
      return state;
  }
};
