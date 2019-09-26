import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'contact', text: 'Home', link: '/', auth: false },
  { id: 'about', text: 'About', link: '/about', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false },
  { id: 'login', text: 'Login', link: '/login', auth: false},
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