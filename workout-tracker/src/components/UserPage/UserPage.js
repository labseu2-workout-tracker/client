import React from 'react';
import Calendar from './Calendar';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Calendar />
     );
  }
}
 
export default UserPage;