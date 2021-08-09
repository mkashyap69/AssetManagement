import React from 'react';
import Chart from 'react-google-charts';

const ChartContainer = ({ heading ,data}) => {
  return (
    <div className="chart-container">
      <div className="chart-container-heading">{heading}</div>
      <div className="chart-container-data">
        <Chart
          width={'30vw'}
          height={'20vh'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            is3D: true,
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
};

export default ChartContainer;
