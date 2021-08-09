const axios = require('axios');

export const getSavedSeverities = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'GET_SAVED_SEVERITIES_START',
    });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().user.data.token}`,
      },
    };

    const { data } = await axios.get(
      'http://localhost:9000/api/v1/asset/severity',
      config
    );

    dispatch({
      type: 'GET_SAVED_SEVERITIES_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_SAVED_SEVERITIES_SUCCESS',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
