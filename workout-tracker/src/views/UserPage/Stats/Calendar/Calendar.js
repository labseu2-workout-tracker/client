import React from "react";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import { Calendar, Badge } from "antd";

class TheCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
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
            let date = new Date();
            let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

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

            let allDaysInMonth = Object.values(getDates(firstDay, lastDay));
            let daysInMonth = [];

            Date.prototype.yyyymmdd = function() {
              let mm = this.getMonth() + 1;
              let dd = this.getDate();

              return [
                this.getFullYear(),
                (mm > 9 ? "" : "0") + mm,
                (dd > 9 ? "" : "0") + dd
              ].join("");
            };

            for (let i = 0; i < allDaysInMonth.length; i++) {
              daysInMonth.push(allDaysInMonth[i].yyyymmdd().toString());
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
                  resultOfWeek.push({
                    ...userHistory[i],
                    day: Number(
                      userHistory[i].session_start[8] +
                        userHistory[i].session_start[9]
                    )
                  });
                }
              }
            }

            let theResult = [];

            for (let i = 0; i < resultOfWeek.length; i++) {
              for (let j = 0; j < workouts.length; j++) {
                if (resultOfWeek[i].workout_id === workouts[j].id) {
                  theResult.push({
                    ...resultOfWeek[i],
                    workout_name: workouts[j].workout_name
                  });
                }
              }
            }
            this.setState({
              result: theResult
            });
          });
      });
  };

  getListData = value => {
    let listData;
    let lettersOfMonth = value._d.toString();
    const lettersOfTheMonth =
      lettersOfMonth[4] + lettersOfMonth[5] + lettersOfMonth[6];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const d = new Date();
    const lettersCurrentMonth = monthNames[d.getMonth()].match(/.{3}/g)[0];

    for (let i = 0; i < this.state.result.length; i++) {
      if (lettersOfTheMonth === lettersCurrentMonth) {
        switch (value.date()) {
          case this.state.result[i].day:
            listData = [
              { type: "success", content: this.state.result[i].workout_name }
            ];
            break;
          default:
        }
      }
    }
    return listData || [];
  };

  dateCellRender = value => {
    const listData = this.getListData(value);
    return (
      <ul className="events" style={{ listStyle: "none" }}>
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  getMonthData = value => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  monthCellRender = value => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  render() {
    return (
      <Calendar
        dateCellRender={this.dateCellRender}
        monthCellRender={this.monthCellRender}
      />
    );
  }
}

export default TheCalendar;
