import React from "react";
import { Route, Switch } from "react-router";


//import ProfileImage from "./ProfileImage";
import UserTracker from './Tracker/UserTracker';
import MyWorkouts from './MyWorkouts/MyWorkouts';
import UserHistory from './UserHistory/UserHistory';
import UserNotifications from './UserNotifications/UserNotifications';
import Settings from '../Settings/Settings';
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
      <div className='dashboard-component'>
        <Switch>
          <Route path={'/Dashboard/myworkouts'} component={MyWorkouts} />
          <Route path={'/Dashboard/tracker'} component={UserTracker} />
          <Route path={'/Dashboard/history'} component={UserHistory} />
          <Route path={'/Dashboard/notifications'} component={UserNotifications} />
          <Route path={'/Dashboard/settings'} component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default UserPage;