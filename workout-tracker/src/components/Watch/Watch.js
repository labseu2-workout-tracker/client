import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <h1 id="toggle">00 : 00 . 000</h1>
      <button id="toggle">Start</button>
      <button id="reset">Reset</button>
     );
  }
}
 
export default Watch;