import React from "react";
import { Calendar } from "antd";
import { axiosWithAuth } from "../../../../store/axiosWithAuth";
import styled from "styled-components";

const StyledMobileCalendar = styled.div`
`;

class MobileCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
    };
  }

  componentDidMount = () => {
    axiosWithAuth()
    .get(`${process.env.REACT_APP_BASE_URL}/workouts/history`)
    .then(res => this.setState({
      history: res.data.workoutHistory,
    }));
  };

  showDate = value => {
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
    console.log(formatDate(value._d), this.state.history);
  };

  render() {
    return (
      <StyledMobileCalendar>
        <Calendar fullscreen={false} onSelect={this.showDate} />
      </StyledMobileCalendar>
    );
  }
}

export default MobileCalendar;
