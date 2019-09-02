import React from "react";
import { Route, Switch } from "react-router";


//import ProfileImage from "./ProfileImage";
import UserTracker from './Tracker/UserTracker';
import MyWorkouts from './MyWorkouts/MyWorkouts';
import UserHistory from './UserHistory/UserHistory';
import UserNotifications from './UserNotifications/UserNotifications';
import UserSettings from './UserSettings/UserSettings';
import DashboardNavItem from "./DashboardNavItem";
import logo from '../../assets/images/beFit-logo2.png'
import './UserPage.css'

const UserPage = (props) => {
  return (
    <div className="dashboard-container">
    <aside className='dash-sidebar-container'>
      <div className="nav-items">
        <DashboardNavItem />
      </div>
      <div className="empty-div" />
      <div className="grey-logo">
        <img src={logo} alt="" />
      </div>
    </aside>
    <div>
      <Switch>
        <Route path={'/dashboard/myworkouts'} component={MyWorkouts} />
        <Route path={'/dashboard/tracker'} component={UserTracker} />
        <Route path={'/dashboard/history'} component={UserHistory} />
        <Route path={'/dashboard/notifications'} component={UserNotifications} />
        <Route path={'/dashboard/settings'} component={UserSettings} />
      </Switch>
    </div>

    </div>
  );
};

export default UserPage;