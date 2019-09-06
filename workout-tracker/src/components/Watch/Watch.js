import React from 'react';
import Stopwatch from 'rc-stopwatch';
 
const styles = {
  container: {
    width: '300px'
  },
  startBtn: {
    backgroundColor: '#daaeee',
    color: '#333'
  },
  btn: {
    fontFamily: 'monospace'
  },
  title: {
    textAlign: 'center',
    color: '#0086C9'
  },
  timeText: {
    fontSize: '19pt',
    fontWeight: 'bold'
  },
  btnWrapper: {
    flexDirection: 'column'
  },
};

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
   
  };

  render() {
    
    return (
      <div>
      <h1 style={styles.title}>Timer</h1>
      <Stopwatch
        buttonClass='button'
        timeTextStyle={styles.timeText}
        buttonContainerStyle={styles.btnWrapper}
        // onTimeChange={obj => console.log(obj)}
      />
      </div>
    );
  }
}

export default Watch;
