export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'USER_LOGIN_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };

    case 'USER_LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload, data: null };
    case 'USER_LOGOUT':
      return { ...state, loading: false, error: null, data: null };
    default:
      return state;
  }
};
