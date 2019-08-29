import React, { Component, Fragment } from 'react';
import Tabs from './views/Tabs/Tabs';
import ExercisesLibrary from './views/ExerciseLibrary/ExercisesLibrary';
import UserPage from './views/UserPage/UserPage';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import SignupPage from './views/Auth/Signup';
import './App.css';

class App extends Component {
  state ={ 
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null
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
        this.setState({ isAuth: false, authLoading: false });
        this.props.history.replace('/');
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


  render() {
    let routes = (
      <Switch>
        <Route
          path="/signup"
          exact
          render={props => (
            <SignupPage
              {...props}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if (this.state.isAuth) {
      routes = (
        <div className="App">
        <Tabs />
          <Route path={'/My Workouts'} component={ExercisesLibrary} />
          <Route path={'/tracker'} component={UserPage} />
      </div>
      )
    }
    return (
      <Fragment>
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
