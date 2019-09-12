import React, { Component } from "react";
import Settings from "./views/Settings/Settings";
import ContactPage from "./views/ContactPage/ContactPage";
import ExercisesLibrary from "./views/ExerciseLibrary/ExercisesLibrary";
import UserPage from "./views/UserPage/UserPage";
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
import ProfileCard from './views/UserPage/ProfileImage'
import Logo from './components/Logo/Logo'
import "./App.css";
import Workouts from "./views/Workouts/Workouts";
import DashboardNavItem from "./components/MainNavBar/SideNavigation/DashboardNavItem";



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
          <ProfileCard
            weight={10}
            // {this.props.settings[0].weight ? this.props.settings[0].weight : 10}
            workouts={10}
            username={'Placeholder'}
            // {this.props.settings[0].username}
          />
        </div>
        <ul className="nav-items">
          <DashboardNavItem isAuth={Auth.isAuthenticated()}/>
          <li className="navigation-item" key="logout">
            <button onClick={this.logoutHandler}>Logout</button>
          </li>
        </ul>
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
          <PrivateRoute path={"/Dashboard"} component={UserPage} />
          <PrivateRoute path={'/Dashboard/myworkouts'} component={UserPage} />
          <PrivateRoute path={'/Dashboard/settings'} component={UserPage} />
          <PrivateRoute path={'/Dashboard/tracker'} component={UserPage} />
          <PrivateRoute path={'/Dashboard/history'} component={UserPage} />
          <PrivateRoute path={'/Dashboard/notifications'} component={UserPage} />
          <PrivateRoute path={"/Exercises"} component={ExercisesLibrary} />
          <PrivateRoute path={"/Settings"} component={Settings} />
          <PrivateRoute path={"/Workouts"} component={Workouts} />
          <PrivateRoute path={"/Workout_session"} component={WorkoutSession} />
          <Redirect to="/" />
        </Switch>
      </>
    );

    return (
      <>
        {this.state.showBackdrop && (
          <Backdrop
            onClick={this.backdropClickHandler}
            open={this.state.showMobileNav}
          />
        )}
        <MainLayout
          header={
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
        sider = {sider}
        routes = {routes}
        />
      </>
    );
  }
}

export default withRouter(App);
