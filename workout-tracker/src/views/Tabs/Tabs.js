import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const tabs = ["My Workouts", "Settings", "Notifications", "History"];

  return (
    <div>
      <Link to="/Home">Tracker</Link>
      {tabs.map((tab, index) => (
        <Link key={index} to={`/${tab}`}>{tab}</Link>
      ))}
    </div>
  );
};

export default Tabs;
