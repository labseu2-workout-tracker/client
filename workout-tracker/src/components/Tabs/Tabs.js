import React from "react";
import { Link } from 'react-router-dom';

const Tabs = () => {
  const tabs = ["tracker", "workout", "settings", "notifications"];

  return tabs.map((tab, index) => (
    <Link
    key={index}
    to={`/${tab}`}>{tab}</Link>
  ));
};

export default Tabs;