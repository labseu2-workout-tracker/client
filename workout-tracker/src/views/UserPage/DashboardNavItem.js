import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardNavItem.css";

const dashItems = [
  {
    id: "workouts",
    text: "My Workouts",
    link: "/dashboard/myworkouts",
    icon: <i className="fas fa-dumbbell"></i>
  },
  {
    id: "stats",
    text: "Stats",
    link: "/dashboard/stats",
    icon: <i className="fas fa-chart-line"></i>
  },
  {
    id: "notifications",
    text: "Notifications",
    link: "/dashboard/notifications",
    icon: <i className="fas fa-bell"></i>
  },
  {
    id: "settings",
    text: "Settings",
    link: "/dashboard/settings",
    icon: <i className="fas fa-cog"></i>
  }
];
const DashboardNavItem = () => [
  ...dashItems.map(item => (
    <li className="dashboard-list-item" key={item.id}>
      <NavLink className="dashboard-items" to={item.link}>
        {item.icon}
      </NavLink>
      <NavLink className="dashboard-items" to={item.link}>
        <span>{item.text}</span>
      </NavLink>
    </li>
  ))
];

export default DashboardNavItem;
