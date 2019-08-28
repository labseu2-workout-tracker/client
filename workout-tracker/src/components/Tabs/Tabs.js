import React from "react";
import { connect } from "react-redux";
import { showCategory } from '../../store/actions/tabsActions';

const Tabs = () => {
  const tabs = ["Tracker", "Workout", "Settings", "Notifications"];

  return tabs.map(tab => (
    <button onClick={e => props.showCategory(e.target.textContent)}>
      {tab}
    </button>
  ));
};

export default connect(null, { showCategory })(Tabs);
