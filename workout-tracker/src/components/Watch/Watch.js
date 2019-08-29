import React from 'react';
import Timer from 'react-timer'
import styled from 'styled-components';

const StyledWatch = styled.div`
`;

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
    return ( 
      <StyledWatch>
     
      </StyledWatch>
     );
  }
}
 
export default Watch;