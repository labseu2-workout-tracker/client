import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'workouts', text: 'Workouts', link: '/workouts', auth: true, mobile: true },
  { id: 'exercise', text: 'Exercises', link: '/exercises', auth: true, mobile: true },
  { id: 'dashboard', text: 'Dashboard', link: '/dashboard/myworkouts', auth: true, mobile: false },
  { id: 'contact', text: 'Contact', link: '/contact', auth: false, mobile: true },
  { id: 'about', text: 'About', link: '/about', auth: false, mobile: true },
  { id: 'login', text: 'Login', link: '/login', auth: false, mobile: true },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false, mobile: true },
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
  ))
]

export default navigationItems;