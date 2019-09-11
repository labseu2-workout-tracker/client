import React from "react";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import { Calendar, Badge } from "antd";
import styled from "styled-components";

const StyledTheCalendar = styled.div`
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }
  .notes-month section {
    font-size: 28px;
  }
`;

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
            
            let daylist = getDaysArray(
              first_day_year,
              last_day_year
            );
            daylist.map(v => v.toISOString().slice(0, 10)).join("");

            let daysInYear = [];

            function formatDate(date) {
              var d = new Date(date),
                  month = '' + (d.getMonth() + 1),
                  day = '' + d.getDate(),
                  year = d.getFullYear();
          
              if (month.length < 2) 
                  month = '0' + month;
              if (day.length < 2) 
                  day = '0' + day;
          
              return [year, month, day].join('-');
          }
          
            for (let i = 0; i < daylist.length; i++) {
              daysInYear.push(formatDate(daylist[i]).split("-").join(""));
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
      <StyledTheCalendar>
        <Calendar
          dateCellRender={this.dateCellRender}
          monthCellRender={this.monthCellRender}
        />
      </StyledTheCalendar>
    );
  }
}

export default TheCalendar;
