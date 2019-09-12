import React from "react";
import { fetchWorkouts } from "../../../../store/actions/workoutsActions";
import { fetchWorkoutsHistory } from "../../../../store/actions/historyActions";
import { Card } from "antd";
import { connect } from "react-redux";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const StyledMonthlyGraph = styled.div`
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;

  .apexcharts-toolbar {
    display: none;
  }

  #SvgjsSvg1858 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class MonthlyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Monthly Results",
        align: "center"
      },
      grid: {
        row: {
          colors: [
            "#f3f3f3"
            //  'transparent'
          ], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      categories: [
        "Chest and Shoulder Smackdown",
        "Chest and Shoulder Smackdown",
        "Chest and Shoulder Smackdown",
        "Chest and Shoulder Smackdown"
      ],
      name: "Desktops",
      data: [1, 2, 1, 0]
    };
  }

    componentDidMount = () => {
    this.props.fetchWorkouts();
    this.props.fetchWorkoutsHistory();
    let workoutNames = [];
    let workouts = [];

        this.props.workouts.map(workout => {
          workoutNames.push(workout.workout_name);
          workouts.push(workout);
          return workout;
        });

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

            let userHistory = this.props.history;
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
              categories: workoutNames
            });
  };

  render() {
    return (
      <StyledMonthlyGraph style={{ backgroundColor: "#FC940C" }}>
        <ReactApexChart
          options={{
            chart: this.state.chart,
            dataLabels: this.state.dataLabels,
            stroke: this.state.stroke,
            title: this.state.title,
            grid: this.state.grid,
            xaxis: { categories: this.state.categories }
          }}
          series={[{ name: this.state.name, data: this.state.data }]}
          type="line"
          height="350"
          width="700"
        />
      </StyledMonthlyGraph>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history.history,
    workouts: state.workouts.workouts
  };
};

export default connect(
  mapStateToProps,
  { fetchWorkouts, fetchWorkoutsHistory }
)(MonthlyGraph);