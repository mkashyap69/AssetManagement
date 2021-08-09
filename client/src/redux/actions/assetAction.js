const axios = require('axios');

export const getSavedAssets = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'GET_SAVED_ASSETS_START',
    });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().user.data.token}`,
      },
    };

    const { data } = await axios.get(
      'http://localhost:9000/api/v1/asset/',
      config
    );

    dispatch({
      type: 'GET_SAVED_ASSETS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_SAVED_ASSETS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addAsset =
  ({
    name,
    type,
    manufacturer,
    model,
    description,
    version,
    serialNumber,
    areaName,
    conditionName,
    source,
    parameters,
    triggerCondition,
    conditionExpression,
    conditionDesc,
    severityType,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: 'ADD_ASSET_START',
      });

      const config = {
        headers: {
          Authorization: `Bearer ${getState().user.data.token}`,
        },
      };

      const { data } = await axios.post(
        'http://localhost:9000/api/v1/asset/',
        {
          name,
          type,
          manufacturer,
          model,
          description,
          version,
          serialNumber,
          areaName,
          conditionName,
          source,
          parameters,
          triggerCondition,
          conditionExpression,
          conditionDesc,
          severityType,
        },
        config
      );

      dispatch({
        type: 'ADD_ASSET_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_ASSET_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
