import React from 'react';
import Calendar from '../../components/MainUserComponents/Tracker/Calendar';
import ActivityChart from '../../components/MainUserComponents/Tracker/ActivityChart';

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