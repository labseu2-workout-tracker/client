import React from "react";
import { NavLink } from "react-router-dom";

import MobileToggle from './MobileToggle/MobileToggle';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

import './MainNavBar.css';

const MainNavBar = (props) => (
  <nav className="main-nav">
    <MobileToggle onOpen={props.onOpenMobileNav} />
    <div className="main-nav__logo">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      {props.isAuth }
      <NavigationItems isAuth={props.isAuth} onLogout={props.onLogout} />
      {/* {props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  )} */}
    </ul>
  </nav>
);

export default MainNavBar;
