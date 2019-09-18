import React from "react";
import { Pie, Chart } from "react-chartjs-2";
import { Card } from "antd";
import { connect } from "react-redux";

const { Meta } = Card;

Chart.defaults.global.legend.display = false;

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

    this.props.workouts.map(workout => {
      workoutNames.push(workout.workout_name);
      workouts.push(workout);
      return workout;
    });

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

    var getDaysArray = function(s, e) {
      for (var a = [], d = s; d <= e; d.setDate(d.getDate() + 1)) {
        a.push(new Date(d));
      }
      return a;
    };
    let daylist = getDaysArray(startAndEndWeek[0], startAndEndWeek[1]);
    daylist.map(v => v.toISOString().slice(0, 10)).join("");

    let daysInWeek = [];

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
      daysInWeek.push(
        formatDate(daylist[i])
          .split("-")
          .join("")
      );
    }

    let userHistory = this.props.history;
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

    for (var value in hashTable) {
      valuesForDataset.push(hashTable[value]);
    }

    this.setState({
      data: valuesForDataset,
      labels: workoutNames
    });
  };

  render() {
    return (
      <Card
        hoverable
        className="chart chart-one"
        cover={
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#11B8CC",
              borderTopLeftRadius: ".6rem",
              borderTopRightRadius: ".6rem",
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
          title="Weekly Result"
          description={
            <div>
              <i className="fa fa-fire"></i>{" "}
              {`You made ${this.state.data.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )} ${
                this.state.data.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) === 1
                  ? "workout"
                  : "workouts"
              } this week.`}{" "}
            </div>
          }
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history.history,
    workouts: state.workouts.workouts
  };
};

export default connect(mapStateToProps)(WeeklyChart);
