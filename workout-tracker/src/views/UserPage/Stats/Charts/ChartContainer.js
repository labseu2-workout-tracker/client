import React from "react";
// import Calendar from './Calendar';
// import { Calendar } from 'antd';
// import 'antd/dist/antd.css';
import WeeklyChart from "./WeeklyChart";
import MonthlyChart from "./MonthlyChart";
import YearlyChart from "./YearlyChart";
import styled from "styled-components";
import { Select } from "antd";

const { Option } = Select;

const StyledChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;

  .off {
    display: none;
  }

  .weekly , .monthly, .yearly {
  width: 70%;
  }
`;

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekly: true,
      monthly: false,
      yearly: false
    };
  }
  handleChange = value => {
    this.setState({
      weekly: false,
      monthly: false,
      yearly: false
    });
    
    this.setState({
      [value]: true,
    });
  };

  render() {
    return (
      <StyledChartContainer>
        <div className={this.state.weekly ? "weekly" : "off"}>
        <WeeklyChart />
        </div>
        <div className={this.state.monthly ? "monthly" : "off"}>
        <MonthlyChart />
        </div>
        <div className={this.state.yearly ? "yearly" : "off"}>
        <YearlyChart />
        </div>
        <Select
          defaultValue="weekly"
          style={{ width: 120 }}
          onChange={this.handleChange}
        >
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="yearly">Yearly</Option>
        </Select>
      </StyledChartContainer>
    );
  }
}

export default ChartContainer;
