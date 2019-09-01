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
    button[2].textContent = "stop";
    button[2].click();
    button[0].click();
  }

  finishWorkout = () => {
    const button = document.querySelectorAll('button');
    // const time = document.querySelector('.seconds').textContent;
    
    button[2].click();
    // time variable is actual time (in milliseconds)
  }
  render() {
    const OPTIONS = { delay: 100}
    return ( 
      <StyledWatch>
        <h3>Timer</h3>
     <Timer options={OPTIONS} />
     <button  onClick={this.finishWorkout}>Finish</button>
      </StyledWatch>
     );
    }
}
 
export default Watch;