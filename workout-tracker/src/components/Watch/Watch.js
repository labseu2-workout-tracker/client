import React from 'react';
import styled from 'styled-components';

function Stopwatch() {
  var time = 0;
  var interval;
  var offset;

  function update() {}
  function delta() {}
  function timeFormat() {}

  this.isOn = false;
  this.start = function() {};
  this.stop = function() {};
  this.reset = function() {};
}

var watch = new Stopwatch();
watch.start();

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