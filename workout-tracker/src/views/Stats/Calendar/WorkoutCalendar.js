import React from "react";
import { connect } from "react-redux";
import { Calendar, Modal, Button, Card } from "antd";
import styled from "styled-components";
import uuid from "uuidv4";

const StyledWorkoutCalendar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 0;
  }

  .ant-fullcalendar-fullscreen .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
    height: 50px;
  }

  .ant-radio-button-wrapper {
    display: none;
  }

  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    width: 100%;
    text-overflow: ellipsis;
    font-size: 8px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }

  .notes-month section {
    font-size: 28px;
  }

  .status {
    display: none;
  }

  .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
    display: flex;
  }

  .ant-fullcalendar-fullscreen .ant-fullcalendar-value {
    order: 1;
  }

  .status-text {
    font-size: 0.6rem;
    margin: 0;
    width: 100%;
    height: 3rem;
    font-weight: 200;
    padding: 0.02rem;
  }

  .fa-info-circle {
    color: green;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1150px) {
    .status {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .ant-fullcalendar-fullscreen .ant-fullcalendar-month,
    .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
      height: 35px;
    }

    .fa-info-circle {
      margin: 0.25rem 0 0 0;
    }

    .status-text {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .fa-info-circle {
      font-size: 1rem;
    }

    .ant-fullcalendar-calendar-body {
      padding: 0;
    }
  }

  @media (max-width: 500px) {
    .status {
      display: none;
    }
  }
`;

class WorkoutCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      visible: false,
      workoutsForDate: null
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
          resultOfWeek.push({
            ...userHistory[i],
            day: Number(
              userHistory[i].session_start[8] + userHistory[i].session_start[9]
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
  };

  getListData = value => {
    let listData;
    let lettersOfMonth = value._d.toString();

    const lettersOfTheMonth =
      lettersOfMonth[4] + lettersOfMonth[5] + lettersOfMonth[6];

    const numbersOfTheYear =
      lettersOfMonth[11] +
      lettersOfMonth[12] +
      lettersOfMonth[13] +
      lettersOfMonth[14];

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
    const currentYear = new Date().getFullYear().toString();

    for (let i = 0; i < this.state.result.length; i++) {
      if (
        lettersOfTheMonth === lettersCurrentMonth
        &&
        numbersOfTheYear === currentYear
      ) {
        switch (value.date()) {
          case this.state.result[i].day:
            listData = [
              {
                type: "success",
                content: this.state.result[i].workout_name
              }
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
          <li key={uuid()}>
            <div className="status">
              <i onClick={this.showModal} className="fa fa-info-circle" />
              <Modal
                maskStyle={{ opacity: ".2" }}
                title="Workout List"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={[
                  <Button key={uuid()} type="primary" onClick={this.handleOk}>
                    OK
                  </Button>
                ]}
              >
                {this.state.workoutsForDate
                  ? this.state.workoutsForDate.map(workoutName => (
                      <p style={{height: "80px"}} key={uuid()}>{workoutName}</p>
                    ))
                  : null}
              </Modal>
            </div>
            <div className="status-text">
              <p onClick={this.showModal}>{item.content}</p>
              <Modal
                maskStyle={{ opacity: ".2" }}
                title="Workout List"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={[
                  <Button key={uuid()} type="primary" onClick={this.handleOk}>
                    OK
                  </Button>
                ]}
              >
                {this.state.workoutsForDate
                  ? this.state.workoutsForDate.map(workoutName => (
                      <p key={uuid()}>{workoutName}</p>
                    ))
                  : null}
              </Modal>
            </div>
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

  showWorkoutsForDate = value => {
    const formatDate = date => {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    };

    const filterWorkoutsForDate = this.props.history.filter(
      workout =>
        workout.session_start.match(/.{1,10}/g)[0] === formatDate(value._d)
    );

    let workoutsForDay = [];

    for (let i = 0; i < this.props.workouts.length; i++) {
      for (let j = 0; j < filterWorkoutsForDate.length; j++) {
        if (this.props.workouts[i].id === filterWorkoutsForDate[j].workout_id) {
          workoutsForDay.push(this.props.workouts[i].workout_name);
        }
      }
    }

    if (workoutsForDay[0]) {
      this.setState({
        workoutsForDate: workoutsForDay
      });
    } else {
      this.setState({
        workoutsForDate: ["You didnt made a workout this day"]
      });
    }

    let checkBrowserWidth = window.innerWidth;
    if (checkBrowserWidth < 500 && !this.state.visible) {
      this.showModal();
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
      workoutsForDate: null
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <StyledWorkoutCalendar>
        <Card className="calendar" title="Calendar">
          <Calendar
            dateCellRender={this.dateCellRender}
            monthCellRender={this.monthCellRender}
            onSelect={this.showWorkoutsForDate}
          />
        </Card>
      </StyledWorkoutCalendar>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history.history,
    workouts: state.workouts.workouts
  };
};

export default connect(mapStateToProps)(WorkoutCalendar);
