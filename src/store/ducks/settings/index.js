import { UPDATE_SETTINGS } from './actions';

const initialState = {
  category: 0,
  difficulty: '',
  type: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SETTINGS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
