import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ActivityChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['1 Week','2 Week','3 Week','4 Week',],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [44, 55, 13, 43]
    }
  }

  render() {
    return (
      

      <div id="chart">
        <h1>Monthly Sport Activity</h1>
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="380" />
      </div>


    );
  }
}

export default ActivityChart;