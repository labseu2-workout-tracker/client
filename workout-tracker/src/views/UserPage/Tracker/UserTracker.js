import React from 'react';
// import Calendar from './Calendar';
// import { Calendar } from 'antd';
// import 'antd/dist/antd.css';
import WeeklyChart from './WeeklyChart';
import MonthlyChart from './MonthlyChart';
import YearlyChart from './YearlyChart';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  margin-top: 20px;
  height: 400px;
  /* border: 1px solid black; */
`;

const UserTracker = () => {
  return (
      <Div>
        <WeeklyChart />
        <MonthlyChart/>
        <YearlyChart/>
      </Div>
  );
};

export default UserTracker;
