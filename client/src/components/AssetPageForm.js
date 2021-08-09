import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ConditionConfigInputs from './ConditionConfigInputs';
import ConditionRule from './ConditionRule';
import ConditionViewer from './ConditionViewer';
import ExtendedInfoInpust from './ExtendedInfoInpust';
import FirstRowInputs from './FirstRowInputs';
import { getSavedAConditions } from '../redux/actions/conditionActions';
import { useSelector } from 'react-redux';

const AssetPageForm = () => {
  const dispatch = useDispatch();

  const savedConditions = useSelector(
    (state) => state.savedConditions?.data?.data
  );

  useEffect(() => {
    dispatch(getSavedAConditions());
  }, []);

  return (
    <div className="assetPage-form">
      <FirstRowInputs />
      <div className="mid-inputs">
        <ExtendedInfoInpust />
        <ConditionConfigInputs />
      </div>
      <div className="bottom-inputs">
        <ConditionViewer savedConditions={savedConditions} />
        <ConditionRule />
      </div>
    </div>
  );
};

export default AssetPageForm;
