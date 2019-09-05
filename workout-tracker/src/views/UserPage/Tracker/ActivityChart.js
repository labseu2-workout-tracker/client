import React from "react";
import { Pie } from "react-chartjs-2";
import { axiosWithAuth } from "../../../store/axiosWithAuth";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Red", "Green", "Yellow"],
      data: [2],
      backgroundColor: [
        "#5d5d5d",
        "#91b029",
        "#FFCE56",
        "#fb0091",
        "#a6e3e9",
        "##36A2EB",
        "#51dacf",
        "#edaaaa"
      ],
      hoverBackgroundColor: [
        "#5d5d5d",
        "#91b029",
        "#FFCE56",
        "#fb0091",
        "#a6e3e9",
        "##36A2EB",
        "#51dacf",
        "#edaaaa"
      ]
    };
  }
  componentDidMount = () => {
    let workoutNames = [];
    axiosWithAuth()
      .get("http://localhost:5000/workouts")
      .then(res => {
        res.data.map(workout => workoutNames.push(workout.workout_name));

        axiosWithAuth()
          .get("http://localhost:5000/workouts/history/")
          .then(res => {
            

            function startAndEndOfWeek(date) {
              var now = date ? new Date(date) : new Date();

              now.setHours(0, 0, 0, 0);

              var monday = new Date(now);
              monday.setDate(monday.getDate() - monday.getDay() + 1);

              var sunday = new Date(now);
              sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

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

            return axiosWithAuth()
              .get("http://localhost:5000/workouts")
              .then(res => {
                

                for (let j = 0; j < res.data.length; j++) {
                  hashTable[res.data[j].workout_name] = 0;
                }

                for (let i = 0; i < resultOfWeek.length; i++) {
                  for (let j = 0; j < res.data.length; j++) {
                    if (resultOfWeek[i].workout_id === res.data[j].id) {
                      if (hashTable[res.data[j].workout_name]) {
                        hashTable[res.data[j].workout_name] += 1;
                      } else {
                        hashTable[res.data[j].workout_name] = 1;
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
      });
  };

  render() {
    return (
      <div style={{ position: "relative", width: "60%", height: "50%" }}>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: [
              {
                data: this.state.data[0] ? this.state.data : [0, 0, 0, 0, 0],
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

export default PieChart;
