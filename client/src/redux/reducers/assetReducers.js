export const getSavedAssets = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SAVED_ASSETS_START':
      return { ...state, loading: true };
    case 'GET_SAVED_ASSETS_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };

    case 'GET_SAVED_ASSETS_FAIL':
      return { ...state, loading: true, error: action.payload };

    default:
      return state;
  }
};

export const addAsset = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ASSET_START':
      return { ...state, loading: true, isDone: false };
    case 'ADD_ASSET_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        isDone: true,
      };

    case 'ADD_ASSET_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
        isDone: false,
      };

    case 'ADD_ASSET_RESET':
      return {
        ...state,
        isDone: false,
      };

    default:
      return state;
  }
};
