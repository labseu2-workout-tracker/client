import React from "react";
import { fetchWorkouts } from "../../../../store/actions/workoutsActions";
import { fetchWorkoutsHistory } from "../../../../store/actions/historyActions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import { Calendar, Badge, Modal, Button } from "antd";
import styled from "styled-components";
import uuid from "uuidv4";
import { Card } from "antd";

const StyledWorkoutCalendar = styled.div`
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
    height: 80px;
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

    .fa-info-circle {
      color: green;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 1300px) {
  
  .status {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
      .ant-fullcalendar-fullscreen .ant-fullcalendar-month,
      .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
        height: 60px;
      }

      .ant-badge-status-dot {
        margin-top: 0.5rem;
        width: 20px;
        height: 20px;
      }
    

    .status-text {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .fa-info-circle {
      font-size: 1rem;
    }
  }
`;

class WorkoutCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      history: null,
      visible: false,
      workoutsForDate: ""
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
      result: theResult,
      history: userHistory
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
                  ? this.state.workoutsForDate.map((workoutName, index) => (
                      <p key={index}>{workoutName}</p>
                    ))
                  : null}
              </Modal>
            </div>
            <Badge
              status={item.type}
              text={item.content}
              className="status-text"
            />
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

    const filterWorkoutsForDate = this.state.history.filter(
      workout =>
        workout.session_start.match(/.{1,10}/g)[0] === formatDate(value._d)
    );

    let workoutsForDay = [];

    axiosWithAuth()
      .get(`${process.env.REACT_APP_BASE_URL}/workouts`)
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < filterWorkoutsForDate.length; j++) {
            if (res.data[i].id === filterWorkoutsForDate[j].workout_id) {
              workoutsForDay.push(res.data[i].workout_name);
            }
          }
        }
        this.setState({
          workoutsForDate: workoutsForDay
        });
      });
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
      <Card className="calendar" title="Calendar">
        <StyledWorkoutCalendar>
          <Calendar
            dateCellRender={this.dateCellRender}
            monthCellRender={this.monthCellRender}
            onSelect={this.showWorkoutsForDate}
          />
        </StyledWorkoutCalendar>
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

export default connect(
  mapStateToProps,
  { fetchWorkouts, fetchWorkoutsHistory }
)(WorkoutCalendar);
