import React from "react";
import { Doughnut } from "react-chartjs-2";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import styled from "styled-components";

const StyledYearlyChart = styled.div`

  height: 1000px;
.apexcharts-title-text{
}
`;

class YearlyChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Red", "Green", "Yellow"],
      data: [],
      backgroundColor: [
        "#f6f078",
        "#01d28e",
        "#434982",
        "#730068",
        "#a6e3e9",
        "##36A2EB",
        "#51dacf",
        "#edaaaa"
      ],
      hoverBackgroundColor: [
        "#f6f078",
        "#01d28e",
        "#434982",
        "#730068",
        "#a6e3e9",
        "##36A2EB",
        "#51dacf",
        "#edaaaa"
      ]
    };
  }
  componentDidMount = () => {
    let workoutNames = [];
    let workouts = [];
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BASE_URL}/workouts`)
      .then(res => {
        res.data.map(workout => {
          workoutNames.push(workout.workout_name);
          workouts.push(workout);
        });

        axiosWithAuth()
          .get(`${process.env.REACT_APP_BASE_URL}/workouts/history`)
          .then(res => {
            let year = new Date().getFullYear();

            let first_day_year = new Date(year, 0, 1);
            let last_day_year = new Date(year, 11, 31);

            Date.prototype.addDays = function(days) {
              let date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            };

            function getDates(startDate, stopDate) {
              let dateArray = new Array();
              let currentDate = startDate;
              while (currentDate <= stopDate) {
                dateArray.push(new Date(currentDate));
                currentDate = currentDate.addDays(1);
              }
              return dateArray;
            }

            let allDaysInYear = Object.values(
              getDates(first_day_year, last_day_year)
            );
         
            let daysInYear = [];

            Date.prototype.yyyymmdd = function() {
              let mm = this.getMonth() + 1;
              let dd = this.getDate();

              return [
                this.getFullYear(),
                (mm > 9 ? "" : "0") + mm,
                (dd > 9 ? "" : "0") + dd
              ].join("");
            };

            for (let i = 0; i < allDaysInYear.length; i++) {
              daysInYear.push(allDaysInYear[i].yyyymmdd().toString());
            }

            let userHistory = [...res.data.workoutHistory];
            let resultOfWeek = [];

            for (let j = 0; j < daysInYear.length; j++) {
              for (let i = 0; i < userHistory.length; i++) {
                if (
                  userHistory[i].session_start
                    .match(/.{1,10}/g)[0]
                    .split("-")
                    .join("") === daysInYear[j]
                ) {
                  resultOfWeek.push(userHistory[i]);
                }
              }
            }

            let hashTable = {};

            for (let j = 0; j < workouts.length; j++) {
              hashTable[workouts[j].workout_name] = 0;
            }

            for (let i = 0; i < resultOfWeek.length; i++) {
              for (let j = 0; j < workouts.length; j++) {
                if (resultOfWeek[i].workout_id === workouts[j].id) {
                  if (hashTable[workouts[j].workout_name]) {
                    hashTable[workouts[j].workout_name] += 1;
                  } else {
                    hashTable[workouts[j].workout_name] = 1;
                  }
                }
              }
            }

            let valuesForDataset = [];

            for (let value in hashTable) {
              valuesForDataset.push(hashTable[value]);
            }

            this.setState({
              data: valuesForDataset,
              labels: workoutNames
            });
          });
      });
  };

  render() {
    return (
      <StyledYearlyChart
      style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <h2>Yearly Results</h2>
        <Doughnut
          data={{
            labels: this.state.labels,
            datasets: [
              {
                data: this.state.data,
                backgroundColor: this.state.backgroundColor,
                hoverBackgroundColor: this.state.hoverBackgroundColor
              }
            ]
          }}
        />
      </StyledYearlyChart>
    );
  }
}

export default YearlyChart;
