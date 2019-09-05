import React from 'react';
<<<<<<< HEAD
import Button from '../../Button/Button'
=======
import { NavLink } from 'react-router-dom';
>>>>>>> 7bf9b309ac6f43627fa18d0f22a9c4ee90c06845
import NavigationItems from '../NavigationItems/NavigationItems';
import './MobileNavigation.css';

const mobileNavItems = [
  { id: "myworkouts", text: 'My Workouts', link: "/dashboard/myworkouts", auth: true},
  { id: "tracker", text: 'Tracker', link: "/dashboard/tracker", auth: true},
  { id: "history", text: 'History', link: "/dashboard/history", auth: true},
  { id: "notifications", text: 'Notifications', link: "/dashboard/notifications", auth: true},
  { id: "settings", text: 'Settings', link: "/dashboard/settings", auth: true},
]

const mobileNavigation = props => (
  <nav className={['mobile-nav', props.open ? 'open' : ''].join(' ')}>
    <div className='close-button'>
      <Button design="close" onClick={props.onChooseItem} >X</Button>
    </div>
    <ul
      className={['mobile-nav__items', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavigationItems
        mobile
        onChoose={props.onChooseItem}
        isAuth={props.isAuth}
        onLogout={props.onLogout}
      />
      {mobileNavItems.filter(item => item.auth === props.isAuth).map(item => (
      <li
        key={item.id}
        className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
      >
        <NavLink to={item.link} exact onClick={props.onChooseItem}>
          {item.text}
        </NavLink>
      </li>
      ))}
      {props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  )}
    </ul>
  </nav>
);

export default mobileNavigation;
