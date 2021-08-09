import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/AssetDashBoard.css';
import { getSavedSeverities } from '../redux/actions/severityActions';
import ChartContainer from './ChartContainer';
import DashboardGraph from './DashboardGraph';
import DashboardTable from './DashboardTable';
import FilterDropdown from './FilterDropdown';
import countBy from 'lodash.countby';
import { getSavedAreas } from '../redux/actions/areaAction';

const assetBySummaryData = [['Severity', 'No Of Assets']];
const assetByAreaData = [['Area', 'No Of Assets']];

const graphData = [
  ['x', 'status'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
  [8, 33],
  [9, 40],
  [10, 32],
  [11, 35],
];

const AssetDashBoard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userSeverities, setUserSeverities] = useState();
  const savedAssets = useSelector((state) => state.savedAssets?.data?.data);
  const user = useSelector((state) => state.user?.data?.data);
  const savedSeverities = useSelector(
    (state) => state.savedSeverities?.data?.data
  );
  const savedAreas = useSelector((state) => state.savedAreas?.data?.data);

  useEffect(() => {
    if (savedSeverities.length > 0) {
      const type = savedSeverities.map((severity) => severity.severityType);
      const obj = countBy(type);
      const newArr = Object.entries(obj);
      newArr.forEach((a) => assetBySummaryData.push(a));
    }
  }, [savedSeverities]);

  useEffect(() => {
    if (savedAreas.length > 0) {
      const type = savedAreas.map((area) => area.areaName);
      const obj = countBy(type);
      const newArr = Object.entries(obj);
      newArr.forEach((a) => assetByAreaData.push(a));
    }
  }, [savedAreas]);

  useEffect(() => {
    if (savedSeverities) {
      setUserSeverities(
        savedSeverities.filter((severity) => severity.asset?.user === user?._id)
      );
    }
  }, []);

  useEffect(() => {
    dispatch(getSavedSeverities());
    dispatch(getSavedAreas());
  }, []);

  const sendToAddAsset = () => {
    history.push('/add-asset');
  };

  const logoutHandler = () => {
    dispatch({
      type: 'USER_LOGOUT',
    });
  };

  return (
    <div className="container dashboard-container">
      <div className="dashboard-heading">
        Asset Dashboard
        <button className="add-asset--button" onClick={sendToAddAsset}>
          Add Asset
        </button>
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className="dashboard-charts">
        <ChartContainer heading={'Asset Summary'} data={assetBySummaryData} />
        <ChartContainer heading={'Asset By Area'} data={assetByAreaData} />
        <ChartContainer
          heading={'Asset By Conditions'}
          data={assetBySummaryData}
        />
      </div>
      <div className="dashboard-dropdown">
        <FilterDropdown name={'asset'} optionData={savedAssets} />
        <FilterDropdown
          name={'area'}
          optionData={['Area1', 'Area2', 'Area3']}
        />{' '}
        <FilterDropdown
          name={'condition'}
          optionData={['Condition1', 'Condition2', 'Condition3']}
        />
      </div>
      <div className="dashboard3rd">
        <DashboardTable />
        <DashboardGraph graphData={graphData} />
      </div>
    </div>
  );
};

export default AssetDashBoard;
