import React from 'react';
import Calendar from './Calendar';
import ActivityChart from './ActivityChart';

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