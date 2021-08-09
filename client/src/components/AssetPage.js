import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAsset } from '../redux/actions/assetAction';
import '../css/AssetPage.css';
import AssetPageForm from './AssetPageForm';
import toast, { Toaster } from 'react-hot-toast';

const AssetPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addAssetError = useSelector((state) => state.addAsset.error);
  const addAssetIsDone = useSelector((state) => state.addAsset?.isDone);

  useEffect(() => {
    if (addAssetError) {
      toast.error(addAssetError);
    }
  }, [addAssetError]);

  useEffect(() => {
    if (addAssetIsDone) {
      dispatch({
        type: 'ADD_ASSET_RESET',
      });
      history.push('/home');
    }
  }, [addAssetIsDone]);

  const addAssetHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const {
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
    } = Object.fromEntries(data.entries());
    await dispatch(
      addAsset({
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
      })
    );
  };
  return (
    <div className="container">
      <Toaster position="top-center" />
      <form onSubmit={(e) => addAssetHandler(e)}>
        <div className="assetPage-buttons">
          <button type="submit">Save Asset</button>
          <button onClick={() => history.push('/home')}>Delete Asset</button>
        </div>
        <AssetPageForm />
      </form>
    </div>
  );
};

export default AssetPage;
