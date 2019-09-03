import React, { Component, Fragment } from 'react';
// import Tabs from './views/Tabs/Tabs';
import Header from './views/Header/Header';
import Settings from './views/Settings/Settings';
import WorkoutSession from './views/WorkoutSession/WorkoutSession';
import ContactPage from './views/ContactPage/ContactPage';
import ExercisesLibrary from './views/ExerciseLibrary/ExercisesLibrary';
import UserPage from './views/UserPage/UserPage';
import About from './views/AboutUs/AboutUs'
import LandingPage from './views/LandingPage/LandingPage';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import SignupPage from './views/Auth/Signup';
import LoginPage from './views/Auth/Login';
import MainNavBar from './components/MainNavBar/MainNavBar';
import MobileNavigation from './components/MainNavBar/MobileNavigation/MobileNavigation'
import Toolbar from './components/Toolbar/Toolbar';
import Layout from './components/Layout/Layout';
import Backdrop from './components/Backdrop/Backdrop';

import './App.css';
import Workouts from './views/Workouts/Workouts';

class App extends Component {
  state ={ 
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null,
    showMobileNav: false,
    showBackdrop: false
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
    this.props.history.replace('/');
  };

  signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.signupForm.email.value,
        password: authData.signupForm.password.value,
        username: authData.signupForm.username.value
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          isAuth: true,
          token: resData.token,
          authLoading: false,
          userId: resData.userId

         });
         localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        this.props.history.replace('/dashboard');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          isAuth: true,
          token: resData.token,
          authLoading: false,
          userId: resData.userId
        });
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  mobileNavHandler = isOpen => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen});
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };

  render() {
    let routes = (
      <Switch>
        {/* landing page */}
        <Route exact path="/"
        component={LandingPage}
        />
         <Route  path="/Workouts"
        component={Workouts}
        />

         <Route
          path="/login"
          render={props => (
            <LoginPage
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Route
          path="/signup"
          render={props => (
            <SignupPage
              {...props}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        {/* <Redirect to="/login" /> */}
      </Switch>
    );
    if (this.state.isAuth) {
      routes = (
        <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path={'/Dashboard'} component={UserPage} />
        <Route path={'/Exercises'} component={ExercisesLibrary} />
        <Route path={'/Settings'} component={Settings} />
        <Route path={'/Contact'} component={ContactPage} />    
        <Route path={'/About'} component={About} />  
        <Route path={'/Workouts'} component={Workouts} /> 
        <Redirect to='/Dashboard' />       
      </Switch>
    </div>
      )
    }
    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} open={this.state.showMobileNav}/>
        )}
        <Layout
          header={
            <Toolbar>
              <MainNavBar
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                onLogout={this.logoutHandler}
                isAuth={this.state.isAuth}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isAuth={this.state.isAuth}
            />
          }
        />
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
