const axios = require('axios');

export const getSavedAConditions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'GET_SAVED_CONDITIONS_START',
    });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().user.data.token}`,
      },
    };

    const { data } = await axios.get(
      'http://localhost:9000/api/v1/asset/condition',
      config
    );

    dispatch({
      type: 'GET_SAVED_CONDITIONS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_SAVED_CONDITIONS_SUCCESS',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
