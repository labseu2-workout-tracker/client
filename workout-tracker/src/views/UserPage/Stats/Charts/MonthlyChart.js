import React from "react";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import { Doughnut } from "react-chartjs-2";

class MonthlyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: ["Red", "Green", "Yellow"],
      data: [1, 5, 6, 7],
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
          return workout;
        });

        axiosWithAuth()
          .get(`${process.env.REACT_APP_BASE_URL}/workouts/history`)
          .then(res => {
            let date = new Date();
            let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

            var getDaysArray = function(s, e) {
              for (var a = [], d = s; d <= e; d.setDate(d.getDate() + 1)) {
                a.push(new Date(d));
              }
              return a;
            };

            let daylist = getDaysArray(firstDay, lastDay);
            daylist.map(v => v.toISOString().slice(0, 10)).join("");

            let daysInMonth = [];

            function formatDate(date) {
              var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

              if (month.length < 2) month = "0" + month;
              if (day.length < 2) day = "0" + day;

              return [year, month, day].join("-");
            }

            for (let i = 0; i < daylist.length; i++) {
              daysInMonth.push(
                formatDate(daylist[i])
                  .split("-")
                  .join("")
              );
            }

            let userHistory = [...res.data.workoutHistory];
            let resultOfWeek = [];

            for (let j = 0; j < daysInMonth.length; j++) {
              for (let i = 0; i < userHistory.length; i++) {
                if (
                  userHistory[i].session_start
                    .match(/.{1,10}/g)[0]
                    .split("-")
                    .join("") === daysInMonth[j]
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

            for (var value in hashTable) {
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
      // <div style={{ position: "relative", width: "100%", height: "100%" }}>
      //   <Doughnut
      //     data={{datasets: [{
      //       data: this.state.data,
      //       backgroundColor: this.state.backgroundColor,
      //       hoverBackgroundColor: this.state.hoverBackgroundColor,
      //       label: "Monthly Results",
      //     }],
      //       labels: this.state.labels,
      //     }}
      //   />
      // </div>

<Card
// title="Weekly Result" 
style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#11B8CC" }}
// style={{ backgroundColor: "#11B8CC" }}
>
<Doughnut
          data={{datasets: [{
            data: this.state.data,
            backgroundColor: this.state.backgroundColor,
            hoverBackgroundColor: this.state.hoverBackgroundColor,
            label: "Monthly Results",
          }],
            labels: this.state.labels,
          }}
        />
 
</Card>
    );
  }
}

export default MonthlyChart;
