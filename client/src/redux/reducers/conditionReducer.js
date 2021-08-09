export const getSavedConditions = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SAVED_CONDITIONS_START':
      return { ...state, loading: true };
    case 'GET_SAVED_CONDITIONS_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };

    case 'GET_SAVED_CONDITIONS_FAIL':
      return { ...state, loading: false, error: action.payload,data:null };

    default:
      return state;
  }
};
