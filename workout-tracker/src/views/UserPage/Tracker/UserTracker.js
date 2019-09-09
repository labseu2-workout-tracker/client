import React from 'react';
// import Calendar from './Calendar';
// import { Calendar } from 'antd';
// import 'antd/dist/antd.css';
import WeeklyChart from './WeeklyChart';
import MonthlyChart from './MonthlyChart';
import styled from 'styled-components';
import { Menu } from 'antd';

const Div = styled.div`
  display: flex;
  margin-top: 20px;
  height: 400px;
  /* border: 1px solid black; */
`;

const UserTracker = () => {
  return (
      <Div>
        <MonthlyChart/>
        <WeeklyChart />
      </Div>
  );
};

export default UserTracker;
