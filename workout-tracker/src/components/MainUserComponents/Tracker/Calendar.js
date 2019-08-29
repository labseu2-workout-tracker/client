import React from 'react';
import ReactCalendar from 'react-calendar';
// If we want to style calendar ourself import from 'react-calendar/dist/entry.nostyle'

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
      <ReactCalendar onChange={this.getCurrentDay} /> 
     );
  }
}
 
export default Calendar;