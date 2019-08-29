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

  componentDidMount = () => {
    const button = document.querySelectorAll('button');
    button[2].click();
  }
  render() { 
    const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
    return ( 
      <StyledWatch>
        <h3>Timer</h3>
     <Timer options={OPTIONS} />
      </StyledWatch>
     );
  }
}
 
export default Watch;