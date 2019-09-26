import React from "react";
import { connect } from "react-redux";
import { calculateMonthlyChart } from "../../../store/actions/chartActions";
import { Pie } from "react-chartjs-2";
import { Card } from "antd";

const { Meta } = Card;

class MonthlyChart extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     labels: ["Red", "Green", "Yellow"],
  //     data: [1, 5, 6, 7],
  //     backgroundColor: [
  //       "#f6f078",
  //       "#01d28e",
  //       "#434982",
  //       "#730068",
  //       "#a6e3e9",
  //       "##36A2EB",
  //       "#51dacf",
  //       "#edaaaa"
  //     ],
  //     hoverBackgroundColor: [
  //       "#f6f078",
  //       "#01d28e",
  //       "#434982",
  //       "#730068",
  //       "#a6e3e9",
  //       "##36A2EB",
  //       "#51dacf",
  //       "#edaaaa"
  //     ]
  //   };
  // }

  componentDidMount = () => {
    this.props.calculateMonthlyChart(this.props.history, this.props.workouts);
    // let workoutNames = [];
    // let workouts = [];

    // this.props.workouts.map(workout => {
    //   workoutNames.push(workout.workout_name);
    //   workouts.push(workout);
    //   return workout;
    // });

    // let date = new Date();
    // let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // let getDaysArray = function(s, e) {
    //   for (var a = [], d = s; d <= e; d.setDate(d.getDate() + 1)) {
    //     a.push(new Date(d));
    //   }
    //   return a;
    // };

    // let daylist = getDaysArray(firstDay, lastDay);
    // daylist.map(v => v.toISOString().slice(0, 10)).join("");

    // let daysInMonth = [];

    // function formatDate(date) {
    //   let d = new Date(date),
    //     month = "" + (d.getMonth() + 1),
    //     day = "" + d.getDate(),
    //     year = d.getFullYear();

    //   if (month.length < 2) month = "0" + month;
    //   if (day.length < 2) day = "0" + day;

    //   return [year, month, day].join("-");
    // }

    // for (let i = 0; i < daylist.length; i++) {
    //   daysInMonth.push(
    //     formatDate(daylist[i])
    //       .split("-")
    //       .join("")
    //   );
    // }

    // let userHistory = this.props.history;
    // let resultOfWeek = [];

    // for (let j = 0; j < daysInMonth.length; j++) {
    //   for (let i = 0; i < userHistory.length; i++) {
    //     if (
    //       userHistory[i].session_start
    //         .match(/.{1,10}/g)[0]
    //         .split("-")
    //         .join("") === daysInMonth[j]
    //     ) {
    //       resultOfWeek.push(userHistory[i]);
    //     }
    //   }
    // }

    // let hashTable = {};

    // for (let j = 0; j < workouts.length; j++) {
    //   hashTable[workouts[j].workout_name] = 0;
    // }

    // for (let i = 0; i < resultOfWeek.length; i++) {
    //   for (let j = 0; j < workouts.length; j++) {
    //     if (resultOfWeek[i].workout_id === workouts[j].id) {
    //       if (hashTable[workouts[j].workout_name]) {
    //         hashTable[workouts[j].workout_name] += 1;
    //       } else {
    //         hashTable[workouts[j].workout_name] = 1;
    //       }
    //     }
    //   }
    // }

    // let valuesForDataset = [];

    // for (var value in hashTable) {
    //   valuesForDataset.push(hashTable[value]);
    // }

    // this.setState({
    //   data: valuesForDataset,
    //   labels: workoutNames
    // });
  };

  render() {
    return (
      <Card
        hoverable
        className="chart chart-two"
        cover={
          <Card
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#E94340",
              borderTopLeftRadius: ".6rem",
              borderTopRightRadius: ".6rem"
            }}
          >
            <Pie
              data={{
                labels: this.props.monthlyChart.labels,
                datasets: [
                  {
                    data: this.props.monthlyChart.data,
                    backgroundColor: this.props.monthlyChart.backgroundColor,
                    hoverBackgroundColor: this.props.monthlyChart
                      .hoverBackgroundColor
                  }
                ]
              }}
            />
          </Card>
        }
      >
        <Meta
          title="Monthly Result"
          description={
            <div>
              <i className="fa fa-fire"></i>{" "}
              {`You made ${this.props.monthlyChart.data.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )} ${
                this.props.monthlyChart.data.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) === 1
                  ? "workout"
                  : "workouts"
              }  this Month.`}{" "}
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
    workouts: state.workouts.workouts,
    monthlyChart: state.charts.monthlyChart
  };
};

export default connect(
  mapStateToProps,
  { calculateMonthlyChart }
)(MonthlyChart);
