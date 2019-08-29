import React from "react";
import { Link } from 'react-router-dom';

const Tabs = () => {
  const tabs = ["Tracker", "My Workouts", "Settings", "Notifications", 'History'];

  return tabs.map((tab, index) => (
    <Link
    key={index}
    to={`/${tab}`}>{tab}</Link>
  ));
};

export default Tabs;