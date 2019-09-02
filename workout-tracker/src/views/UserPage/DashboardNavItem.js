import React from 'react';
import { NavLink } from 'react-router-dom';
import "./DashboardNavItem.css"

const dashItems = [
  {id: "workouts", text: 'My Workouts', link: "/dashboard/myworkouts"},
  {id: "tracker", text: 'Tracker', link: "/dashboard/tracker"},
  {id: "history", text: 'History', link: "/dashboard/history"},
  {id: "notifications", text: 'Notifications', link: "/dashboard/notifications"},
  {id: "settings", text: 'Settings', link: "/dashboard/settings"},
]
const DashboardNavItem = () => [
  ...dashItems.map(item => (
    <li
    key={item.id} >
      <NavLink to={item.link}><span>{item.text}</span></NavLink>   
    </li>
  )
  )
]

export default DashboardNavItem;