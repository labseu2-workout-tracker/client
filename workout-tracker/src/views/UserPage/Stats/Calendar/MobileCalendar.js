import React from "react";
import { Calendar } from 'antd';
import styled from "styled-components";

const StyledMobileCalendar = styled.div``;

class MobileCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  
  render() {
    return <StyledMobileCalendar></StyledMobileCalendar>;
  }
}

export default MobileCalendar;
