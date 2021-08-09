export const getSavedSeverities = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SAVED_SEVERITIES_START':
      return { ...state, loading: true };
    case 'GET_SAVED_SEVERITIES_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };

    case 'GET_SAVED_SEVERITIES_FAIL':
      return { ...state, loading: false, error: action.payload,data:null };

    default:
      return state;
  }
};
