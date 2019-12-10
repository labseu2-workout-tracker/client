import React from 'react';
import styled from "styled-components";
import Stopwatch from 'rc-stopwatch';

const StyledWatch = styled.div`
witdh: 100%;
display: flex;
justify-content: center;
align-items:center;
flex-direction:row;

`;

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const startButton = document.querySelector(".btn-start");
    startButton.style.backgroundColor= "#2bd22b";
    startButton.style.color= "#fff";
    startButton.style.width= "100px";
    const stopButton = document.querySelector(".btn-stop");
    stopButton.style.backgroundColor= "#ff4d4f";
    stopButton.style.color= "#fff";
    stopButton.style.width= "130px";
    const resetButton = document.querySelector(".btn-reset");
    resetButton.style.backgroundColor= "black"
    resetButton.style.width= "100px";
    resetButton.style.color= "#fff";
    startButton.click();
  };

  render() {
    
    return (
      <StyledWatch>
        <Stopwatch />
      </StyledWatch>
    );
  }
}

export default Watch;
