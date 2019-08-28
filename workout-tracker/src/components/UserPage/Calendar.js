import React from 'react';
import Calendar from 'react-calendar'

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
      <Calendar onChange={this.handleChange} /> 
     );
  }
}
 
export default Calendar;