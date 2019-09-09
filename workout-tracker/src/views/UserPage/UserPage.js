import React, { Fragment } from "react";
import { Route, Switch } from "react-router";


//import ProfileImage from "./ProfileImage";
import UserTracker from './Tracker/UserTracker';
import MyWorkouts from './MyWorkouts/MyWorkouts';
import UserHistory from './UserHistory/UserHistory';
import UserNotifications from './UserNotifications/UserNotifications';
import Settings from '../Settings/Settings';
import DashboardNavItem from "./DashboardNavItem";
import logo from '../../assets/images/beFit-logo2.png'
import styled from 'styled-components';

import './UserPage.css'

import { Layout } from 'antd';

const { Sider, Content } = Layout;

// const StyledLayout = styled(Layout)`

// `

const UserPage = (props) => {
  return (
    <Layout>
      <Sider>
        <div className="nav-items">
          <DashboardNavItem />
        </div>
        <div className="empty-div" />
      </Sider>
      <Content>
        <Switch>
          <Route path={'/Dashboard/myworkouts'} component={MyWorkouts} />
          <Route path={'/Dashboard/tracker'} component={UserTracker} />
          <Route path={'/Dashboard/history'} component={UserHistory} />
          <Route path={'/Dashboard/notifications'} component={UserNotifications} />
          <Route path={'/Dashboard/settings'} component={Settings} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default UserPage;