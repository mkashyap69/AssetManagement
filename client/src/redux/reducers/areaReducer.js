export const getSavedAreas = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SAVED_AREAS_START':
      return { ...state, loading: true };
    case 'GET_SAVED_AREAS_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };

    case 'GET_SAVED_AREAS_FAIL':
      return { ...state, loading: false, error: action.payload, data: null };

    default:
      return state;
  }
};
