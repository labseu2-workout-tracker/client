import React, { Component } from "react";
import Settings from "./views/Settings/Settings";
import ContactPage from "./views/ContactPage/ContactPage";
import ExercisesLibrary from "./views/ExerciseLibrary/ExercisesLibrary";
import Stats from './views/UserPage/Stats/Stats';
import About from "./views/AboutUs/AboutUs";
import LandingPage from "./views/LandingPage/LandingPage";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import WorkoutSession from "./views/WorkoutSession/WorkoutSession";
import PrivateRoute from "./auth/PrivateRoute";
import Auth from "./auth/auth";
import SignupPage from "./views/Auth/Signup";
import LoginPage from "./views/Auth/Login";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import MobileNavigation from "./components/MainNavBar/MobileNavigation/MobileNavigation";
import MainLayout from "./components/Layout/Layout";
import Backdrop from "./components/Backdrop/Backdrop";
import ProfileCard from './components/MainNavBar/SideNavigation/ProfileCard'
import Logo from './components/Logo/Logo'
import "./App.css";
import Workouts from "./views/Workouts/Workouts";
import DashboardNavItem from "./components/MainNavBar/SideNavigation/DashboardNavItem";
import { Button } from 'antd';
import AllExercises from "./views/customWorkout/AllExercises";


class App extends Component {
  state = {
    showMobileNav: false,
    showBackdrop: false
  };

  logoutHandler = () => {
    localStorage.clear();
    this.props.history.replace("/login");
  };

  mobileNavHandler = isOpen => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
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
        <PrivateRoute exact path={"/Workouts"} component={Workouts} />
        <PrivateRoute path={"/Workout_session"} component={WorkoutSession} />
        <PrivateRoute path={"/Workouts/new/add_exercises"} component={AllExercises} />
        <Redirect to="/workouts" />
      </Switch>
      )
    }

    return (
      <>
        {this.state.showBackdrop && (
          <Backdrop
            onClick={this.backdropClickHandler}
            open={this.state.showMobileNav}
          />
        )}
        <MainLayout
          {...this.props}
          header={
            this.props.location.pathname !== "/workouts/new/add_exercises" &&
            <MainNavBar
              onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
              onLogout={this.logoutHandler}
              isAuth={Auth.isAuthenticated()}
            />
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isAuth={Auth.isAuthenticated()}
            />
          }
        sider = {this.props.location.pathname !== "/workouts/new/add_exercises" && sider}
        routes = {routes}
        />
      </>
    );
  }
}

export default withRouter(App);
