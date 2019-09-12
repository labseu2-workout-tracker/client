import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import ProfileImage from "./ProfileImage";
import UserTracker from "./Tracker/UserTracker";
import MyWorkouts from "./MyWorkouts/MyWorkouts";
import UserHistory from "./UserHistory/UserHistory";
import UserNotifications from "./UserNotifications/UserNotifications";
import Settings from "../Settings/Settings";
import DashboardNavItem from "../../components/MainNavBar/SideNavigation/DashboardNavItem";
import { connect } from "react-redux";
import { fetchSettings } from "../../store/actions/settingActions";
import { Layout } from "antd";

import "./UserPage.css";

const { Sider, Content } = Layout;

const UserPage = props => {
  const { fetchSettings } = props;
  useEffect(() => {
    fetchSettings();
  }, []);

  return (
  <div>dashboard</div>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settings.settings
  };
};

export default connect(
  mapStateToProps,
  { fetchSettings }
)(UserPage);
