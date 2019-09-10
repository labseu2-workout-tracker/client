import React from "react";
import { Pie } from "react-chartjs-2";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";

class WeeklyChart extends React.Component {
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
            let weekMap = [6, 0, 1, 2, 3, 4, 5];

            function startAndEndOfWeek(date) {
              let now = new Date(date);
              now.setHours(0, 0, 0, 0);
              let monday = new Date(now);
              monday.setDate(monday.getDate() - weekMap[monday.getDay()]);
              let sunday = new Date(now);
              sunday.setDate(sunday.getDate() - weekMap[sunday.getDay()] + 6);
              sunday.setHours(23, 59, 59, 999);
              return [monday, sunday];
            }

            let startAndEndWeek = startAndEndOfWeek(new Date());

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

            let allDaysInWeek = Object.values(
              getDates(startAndEndWeek[0], startAndEndWeek[1])
            );
            let daysInWeek = [];

            Date.prototype.yyyymmdd = function() {
              let mm = this.getMonth() + 1;
              let dd = this.getDate();

              return [
                this.getFullYear(),
                (mm > 9 ? "" : "0") + mm,
                (dd > 9 ? "" : "0") + dd
              ].join("");
            };

            for (let i = 0; i < allDaysInWeek.length; i++) {
              daysInWeek.push(allDaysInWeek[i].yyyymmdd().toString());
            }

            let userHistory = [...res.data.workoutHistory];
            let resultOfWeek = [];

            for (let j = 0; j < daysInWeek.length; j++) {
              for (let i = 0; i < userHistory.length; i++) {
                if (
                  userHistory[i].session_start
                    .match(/.{1,10}/g)[0]
                    .split("-")
                    .join("") === daysInWeek[j]
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
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <h2>Weekly Results</h2>
        <Pie
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
      </div>
    );
  }
}

export default WeeklyChart;