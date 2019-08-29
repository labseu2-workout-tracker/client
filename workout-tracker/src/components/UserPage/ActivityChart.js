import React from 'react';
import ReactApexChart from 'react-apexcharts';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// For the data set we must create an array
// get the sport visits for current month from user from our database
// visit is 100 else is 0 points 
// create array based on visits and days of current month


class ActivityChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      selection: 'one_month',
      options: {
        annotations: {
        yaxis: [{
          y: 10000,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }],
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: date,
        tickAmount: 31,
      },
      tooltip: {
        x: {
          format: 'dd'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 1000]
        }
      }
      },
      series: [{
        data: [
          [1,100],
          [2,0],
          [3,100],
          [4,0],
          [5,0],
          [6,0],
          [7,0],
          [8,0],
          [9,100],
          [10,100],
          [11,100],
          [12,0],
          [13,0],
          [14,0],
          [15,0],
          [16,100],
          [17,0],
          [18,0],
          [19,0],
          [20,0],
          [21,0],
          [22,0],
          [23,0],
          [24,0],
          [25,100],
          [26,100],
          [27,0],
          [28,0],
          [29,100],
          [30,100],
          [31,0],
        ]
      }],
    }

  }

  render() {

    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="350" />
      </div>


    );
  }
}

export default ActivityChart;