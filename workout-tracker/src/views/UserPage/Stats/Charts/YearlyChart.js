import React from "react";
import { Pie } from "react-chartjs-2";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import { Card } from "antd";

const { Meta } = Card;

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
          return workout;
        });

        axiosWithAuth()
          .get(`${process.env.REACT_APP_BASE_URL}/workouts/history`)
          .then(res => {
            let year = new Date().getFullYear();
            let first_day_year = new Date(year, 0, 1);
            let last_day_year = new Date(year, 11, 31);

            var getDaysArray = function(s, e) {
              for (var a = [], d = s; d <= e; d.setDate(d.getDate() + 1)) {
                a.push(new Date(d));
              }
              return a;
            };

            let daylist = getDaysArray(first_day_year, last_day_year);
            daylist.map(v => v.toISOString().slice(0, 10)).join("");

            let daysInYear = [];

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
              daysInYear.push(
                formatDate(daylist[i])
                  .split("-")
                  .join("")
              );
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
      <Card
        hoverable
        className="chart chart-three"
        cover={
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#E94340"
            }}
          >
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
          </Card>
        }
      >
        <Meta
          title="Yearly Result"
          description={`You made ${this.state.data.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )} this year.`}
        />
      </Card>
    );
  }
}

export default YearlyChart;
