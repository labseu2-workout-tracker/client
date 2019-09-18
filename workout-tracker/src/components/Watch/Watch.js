import React from 'react';

// import styled from 'styled-components';
import Stopwatch from 'rc-stopwatch';
 


// const StyledWatch = styled.div``;

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
   
  };

  render() {
    
    return (
      <Stopwatch />
    );
  }
}

export default Watch;
