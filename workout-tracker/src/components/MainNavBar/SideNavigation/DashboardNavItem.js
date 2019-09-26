import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const dashItems = [
  {id: "workouts", text: 'Workouts', link: "/workouts", icon: <i className="fas fa-dumbbell"></i>},
  {id: "dashboard", text: 'Dashboard', link: "/dashboard", icon: <i className="fas fa-chart-line"></i>},
  {id: "exercise", text: 'Exercises', link: "/exercises", icon: <i className="fas fa-list"></i>},
  {id: "settings", text: 'Settings', link: "/settings", icon: <i className="fas fa-cog"></i>},
]
const DashboardNavItem = (props) => [
  ...dashItems.map(item => (
    <StyledList
    
    key={item.id} >
      <NavLink to={item.link}> {item.icon} </NavLink>  
      <NavLink to={item.link}><span> {item.text} </span></NavLink>   
    </StyledList>
  )
  )
]

const StyledList = styled.li`
  display: flex;
  word-spacing: 2em;
  padding: 15px;
  text-align: left;
  font-size: 1.3rem;
  color: #fff;

  @media (max-width: 992px) {
      padding: 5px 15px;
  }
  a:last-of-type {
    padding-left: 0.75rem;
  }

  a,
  a:hover {
    color: white;
    font-weight: bold;
  }

  a.active {
    color: #5c0d91;
  }
`

export default DashboardNavItem;