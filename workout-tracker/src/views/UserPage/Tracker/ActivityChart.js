import React from 'react';
// import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// For the data set we must create an array
// get the sport visits for current month from user from our database
// visit is 100 else is 0 points
// create array based on visits and days of current month

// class PieChart extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         theme: {
//           monochrome: {
//             enabled: true
//           }
//         },
//         title: {
//           text: "Workout Chart"
//         },
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }]
//       },
//       series: [25, 15, 44, 55, 41, 17],
//     }
//   }

//   render() {
//     return (

//       <Pie id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
//       </Pie>

//     );
//   }
// }

function PieChart() {
  const data = {
    labels: ['Chest', 'Bicep', 'Tricep'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  return (
    <div style={{ position: 'relative', width: '60%', height: '50%' }}>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
