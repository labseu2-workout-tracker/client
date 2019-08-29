import React from 'react';
import styled from 'styled-components';

const StyledWatch = styled.div`
`;

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledWatch>
      <h1 id="toggle">00 : 00 . 000</h1>
      <button id="toggle">Start</button>
      <button id="reset">Reset</button>
      </StyledWatch>
     );
  }
}
 
export default Watch;