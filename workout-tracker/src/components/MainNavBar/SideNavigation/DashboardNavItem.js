import React from 'react';
import { NavLink } from 'react-router-dom';
import "./DashboardNavItem.css"

const dashItems = [
  {id: "workouts", text: 'Workouts', link: "/workouts", icon: <i className="fas fa-dumbbell"></i>},
  {id: "dashboard", text: 'Dashboard', link: "/dashboard", icon: <i className="fas fa-chart-line"></i>},
  {id: "exercise", text: 'Exercises', link: "/exercises", icon: <i className="fas fa-list"></i>},
  {id: "settings", text: 'Settings', link: "/settings", icon: <i className="fas fa-cog"></i>},
]
const DashboardNavItem = (props) => [
  ...dashItems.map(item => (
    <li className="dashboard-list-item"
    
    key={item.id} >
      <NavLink className="dashboard-items"to={item.link}>{item.icon}</NavLink>
      <NavLink className="dashboard-items" to={item.link}><span>{item.text}</span></NavLink>   
    </li>
  ),
  <li className="navigation-item" key="logout">
    <button onClick={props.onLogout}>Logout</button>
  </li>
  )
]

export default DashboardNavItem;