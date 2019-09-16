import React, { Component } from "react";
import Settings from "./views/Settings/Settings";
import ContactPage from "./views/ContactPage/ContactPage";
import ExercisesLibrary from "./views/ExerciseLibrary/ExercisesLibrary";
import Stats from './views/UserPage/Stats/Stats'
import About from "./views/AboutUs/AboutUs";
import LandingPage from "./views/LandingPage/LandingPage";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import WorkoutSession from "./views/WorkoutSession/WorkoutSession";
import PrivateRoute from "./auth/PrivateRoute";
import Auth from "./auth/auth";
import SignupPage from "./views/Auth/Signup";
import LoginPage from "./views/Auth/Login";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import MainLayout from "./components/Layout/Layout";
import ProfileCard from './components/MainNavBar/SideNavigation/ProfileCard'
import Logo from './components/Logo/Logo'
import "./App.css";
import DashboardNavItem from "./components/MainNavBar/SideNavigation/DashboardNavItem";
import WorkoutContainer from './views/Workouts/WorkoutsContainer'
import 'antd/dist/antd.css';
import { Button } from 'antd';


class App extends Component {
  state = {
    showMobileNav: false,
    showBackdrop: false
  };

  logoutHandler = () => {
    localStorage.clear();
    this.props.history.replace("/login");
  };

  render() {
    let sider = (
      <>
        <div>
          <Logo />
          <ProfileCard />
        </div>
        <ul className="nav-items">
          <DashboardNavItem isAuth={Auth.isAuthenticated()}/>
        </ul>
        <div style={{paddingLeft: "10px"}}>
          <Button  type="danger" onClick={this.logoutHandler}>Logout</Button>
        </div>
      </>
    )
    let routes = (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/signup" render={props => <SignupPage {...props} />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
    if (Auth.isAuthenticated()) {
      routes = (
      <Switch>
        <PrivateRoute path={"/Dashboard"} component={Stats} />
        <PrivateRoute path={"/Exercises"} component={ExercisesLibrary} />
        <PrivateRoute path={"/Settings"} component={Settings} />
        <PrivateRoute path={"/Workouts"} component={WorkoutContainer} />
        <PrivateRoute path={"/Workout_session"} component={WorkoutSession} />
        <Redirect to="/workouts" />
      </Switch>
      )
    }

    return (
      <>
        <MainLayout
          header={
            <MainNavBar
              onLogout={this.logoutHandler}
              isAuth={Auth.isAuthenticated()}
            />
          }
        sider = {sider}
        routes = {routes}
        />
      </>
    );
  }
}

export default withRouter(App);
