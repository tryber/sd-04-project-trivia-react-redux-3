export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

const updateSettings = (filters) => ({
  type: UPDATE_SETTINGS,
  payload: filters,
});

export default updateSettings;
