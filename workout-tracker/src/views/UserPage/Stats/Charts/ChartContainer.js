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
  .select {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
  }

  .off {
    display: none;
  }

  .weekly,
  .monthly,
  .yearly {
    width: 100%;
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
      [value]: true
    });
  };

  render() {
    return (
      <StyledChartContainer>
        <div className="select">
          <Select
            defaultValue="weekly"
            style={{ width: 120, marginRight:" 2rem" }}
            onChange={this.handleChange}
          >
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
        </div>
        <div className={this.state.weekly ? "weekly" : "off"}>
          <WeeklyChart />
        </div>
        <div className={this.state.monthly ? "monthly" : "off"}>
          <MonthlyChart />
        </div>
        <div className={this.state.yearly ? "yearly" : "off"}>
          <YearlyChart />
        </div>
      </StyledChartContainer>
    );
  }
}

export default ChartContainer;
