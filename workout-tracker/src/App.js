import React, { Component, Fragment } from "react";
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
import Toolbar from "./components/Toolbar/Toolbar";
import Layout from "./components/Layout/Layout";
import Backdrop from "./components/Backdrop/Backdrop";

import "./App.css";
import Workouts from "./views/Workouts/Workouts";

class App extends Component {
  state = {
    showMobileNav: false,
    showBackdrop: false
  };

  logoutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.replace("/login");
  };

  mobileNavHandler = isOpen => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };

  render() {
    let routes = (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/signup" render={props => <SignupPage {...props} />} />
          <PrivateRoute path={"/Dashboard"} component={UserPage} />
          <PrivateRoute path={"/Exercises"} component={ExercisesLibrary} />
          <PrivateRoute path={"/Settings"} component={Settings} />
          <PrivateRoute path={"/Contact"} component={ContactPage} />
          <PrivateRoute path={"/Workouts"} component={Workouts} />
          <PrivateRoute path={"/Workout_session"} component={WorkoutSession} />
          <PrivateRoute path={"/About"} component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop
            onClick={this.backdropClickHandler}
            open={this.state.showMobileNav}
          />
        )}
        <Layout
          header={
            <Toolbar>
              <MainNavBar
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                onLogout={this.logoutHandler}
                isAuth={Auth.isAuthenticated()}
              />
            </Toolbar>
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
        />
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
