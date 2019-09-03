import React from "react";
import Timer from "react-timer";
import styled from "styled-components";

const StyledWatch = styled.div``;

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const buttons = document.querySelectorAll("button");
    var searchText = "pause";

    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent == searchText) {
        buttons[i].textContent = "stop";
        buttons[i].click();
        break;
      }
    }
  };

  finishWorkout = () => {
    const buttons = document.querySelectorAll("button");
    // const time = document.querySelector('.seconds').textContent;

    console.log(buttons);
    // time variable is actual time (in milliseconds)
  };
  render() {
    const OPTIONS = { delay: 100 };
    return (
      <StyledWatch>
        <h3>Timer</h3>
        <Timer options={OPTIONS} />
        <button onClick={this.finishWorkout}>Finish</button>
      </StyledWatch>
    );
  }
}

export default Watch;
