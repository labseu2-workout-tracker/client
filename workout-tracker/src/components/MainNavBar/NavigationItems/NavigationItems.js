import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'workouts', text: 'Workouts', link: '/workouts', auth: true },
  { id: 'exercise', text: 'Exercises', link: '/exercises', auth: true },
  // { id: 'workout', text: 'Workout', link: '/Workout', auth: true },
  { id: 'dashboard', text: 'Dashboard', link: '/dashboard', auth: true },
  { id: 'contact', text: 'Contact', link: '/contact', auth: true },
  { id: 'about', text: 'About', link: '/about', auth: true },
  { id: 'login', text: 'Login', link: '/login', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false },
];

const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavLink to={item.link} exact onClick={props.onChoose}>
        {item.text}
      </NavLink>
    </li>
  )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  )
]

export default navigationItems;