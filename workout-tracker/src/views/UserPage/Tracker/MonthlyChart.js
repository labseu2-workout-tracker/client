import React from "react";
import ReactApexChart from "react-apexcharts";

class MonthlyChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      options: {
        theme: {
          monochrome: {
            enabled: true
          }
        },
        title: {
          text: "Number of leads"
        },
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
      series: [25, 15, 44, 55, 41, 17],
    }
  }

 

  render() {
    return (
      

      <div id="chart">
        <ReactApexChart options={{...this.state.options, labels: this.state.labels}} series={this.state.series} type="pie" width="500px" />
      </div>
    )
  }
}

export default MonthlyChart;