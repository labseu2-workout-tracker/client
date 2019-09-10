import React from 'react';
// import Calendar from './Calendar';
// import { Calendar } from 'antd';
// import 'antd/dist/antd.css';
import WeeklyChart from './WeeklyChart';
import MonthlyChart from './MonthlyChart';
import YearlyChart from './YearlyChart';
import styled from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;

const StyledUserTracker = styled.div`
  display: flex;
  margin-top: 20px;
  height: 400px;
  /* border: 1px solid black; */
`;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const UserTracker = () => {
  return (
      <StyledUserTracker>
        <WeeklyChart />
        <MonthlyChart/>
        <YearlyChart/>
      </StyledUserTracker>
  );
};

export default UserTracker;
