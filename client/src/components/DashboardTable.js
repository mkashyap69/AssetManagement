import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSavedAssets } from '../redux/actions/assetAction';

const colorAccToSeverityType = (severityType) => {
  switch (severityType) {
    case 'Running':
      return 'green';

    case 'Fail':
      return 'red';

    case 'Idle':
      return 'yellow';

    case 'Maintenance Required':
      return 'orange';

    case 'ScheduleDown':
      return 'grey';
    default:
      return 'white';
  }
};

const DashboardTable = ({ userSeverities }) => {
  const dispatch = useDispatch();
  const savedAssets = useSelector((state) => state.savedAssets?.data?.data);
  const loggedInUser = useSelector((state) => state.user?.data?.data);

  useEffect(() => {
    dispatch(getSavedAssets());
  }, []);

  return (
    <div className="dashboard-table">
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Severity</th>
            <th>User</th>
            <th>Role</th>
            <th>Description</th>
            <th>Notifications</th>
          </tr>
        </thead>
        <tbody>
          {savedAssets?.map((asset) => (
            <tr key={asset._id}>
              <td>{asset.name}</td>
              <td
                style={{
                  backgroundColor: `${colorAccToSeverityType(
                    asset.severity.severityType
                  )}`,
                }}
              >
                {asset.severity.severityType}
              </td>
              <td>{loggedInUser?.userName}</td>
              <td>NA</td>
              <td>{asset.description}</td>
              <td>NA</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
