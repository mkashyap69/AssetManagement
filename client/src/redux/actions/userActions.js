import axios from 'axios';

export const login = (userName, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_LOGIN_START',
    });

    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    const { data } = await axios.post(
      'http://localhost:9000/api/v1/auth/login',
      {
        userName,
        password,
      }
    );

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAILURE',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
