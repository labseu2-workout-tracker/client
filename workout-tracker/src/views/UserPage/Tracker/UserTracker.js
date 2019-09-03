import React from 'react';
import Calender from './Calendar';
import PieChart from './ActivityChart';
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
`;

const UserTracker = () => {
  return ( 
    <Div>
      <PieChart />
      <Calender />

    </Div>
   );
}
 
export default UserTracker;