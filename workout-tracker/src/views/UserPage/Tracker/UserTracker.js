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

const StyledUserTracker = styled.div`
  display: flex;
  margin-top: 20px;
  height: 400px;
  /* border: 1px solid black; */
`;

class UserTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      weekly: true,
      monthly: false,
      yearly: false,
    }
  }
  handleChange = (value) => {
            console.log(`selected ${value}`);
          }

  render() { 
    return ( 
      <StyledUserTracker>
      <Select
        defaultValue="weekly"
        style={{ width: 120 }}
        onChange={handleChange}
        >
        <Option value="weekly">Weekly</Option>
        <Option value="monthly">Monthly</Option>
        <Option value="yearly">Yearly</Option>
      </Select>
      <WeeklyChart />
      <MonthlyChart />
      <YearlyChart />
    </StyledUserTracker>
     );
  }
}
 
export default UserTracker;
