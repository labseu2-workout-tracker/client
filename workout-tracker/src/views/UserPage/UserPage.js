import React from 'react';
import Calendar from './Tracker/Calendar';
import ActivityChart from './Tracker/ActivityChart';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div> 
      <Calendar />
      <ActivityChart/>
      </div>
     );
  }
}
 
export default UserPage;