import React from "react";
import { Calendar } from "antd";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    return <Calendar onPanelChange={onPanelChange} />;
  }
}

export default Calendar;
