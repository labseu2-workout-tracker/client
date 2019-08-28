import React from "react";
import { Link } from 'react-router-dom';

const Tabs = () => {
  const tabs = ["tracker", "workout", "settings", "notifications"];

  return tabs.map(tab => (
    <Link to={`/${tab}`}>{tab}</Link>
  ));
};

export default Tabs;