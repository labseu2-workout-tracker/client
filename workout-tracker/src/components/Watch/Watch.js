import React from 'react';
import Timer from 'react-compound-timer';
import styled from 'styled-components';

// function Stopwatch() {
//   var time = 0;
//   var interval;
//   var offset;

//   function update() {
//     time += delta();
//     var formattedTime = timeFormatter(time);
//   }

//   function delta() {
//     var now = Date.now();
//     var timePassed = now - offset;
//     offset = now;
//     return timePassed;
//   }

//   function timeFormatter(timeInMilliSeconds) {
//     var time = new Date(timeInMilliSeconds);
//   }

//   this.isOn = false;

//   this.start = function() {
//     if(!this.isOn) {
//      interval = setInterval(update, 10);
//      offset = Date.now();
//      this.isOn = true;
//     }
//   };
  
//   this.stop = function() {
//     if(this.isOn) {
//       clearInterval(interval);
//       intervall = null;
//       this.isOn = false;
//     }
//   };
  
//   this.reset = function() {
//     time = 0;
//   };
// }

// var watch = new Stopwatch();
// watch.start();

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