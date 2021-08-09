import React from 'react';
import Chart from 'react-google-charts';

const DashboardGraph = ({ graphData }) => {
  return (
    <div className="dashboard-graph">
      <Chart
        width={'100%'}
        height={'100%'}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={graphData}
        options={{
          title: 'Asset Status (Telemetry Data)',
          hAxis: {
            title: 'Date',
          },
          vAxis: {
            title: 'Status',
          },
        }}
        rootProps={{ 'data-testid': '4' }}
      />
    </div>
  );
};

export default DashboardGraph;
