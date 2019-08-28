import React from 'react';
import ReactCalendar from 'react-calendar'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  getCurrentDay = day => {
console.log(day)
  };

  render() { 
    return ( 
      <ReactCalendar onChange={this.handleChange} /> 
     );
  }
}
 
export default Calendar;