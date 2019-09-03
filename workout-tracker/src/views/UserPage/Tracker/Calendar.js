import React from 'react';
import ReactCalendar from 'react-calendar';
import styled from 'styled-components';
// If we want to style calendar ourself import from 'react-calendar/dist/entry.nostyle'

const Div = styled.div`
  width: 40%;
  border: 1px solid red;
  display: flex;
  justify-content: end;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCurrentDay = day => {
    console.log(day);
  };

  render() {
    return (
      <Div>
        <ReactCalendar onChange={this.getCurrentDay} />
      </Div>
    );
  }
}

export default Calendar;
