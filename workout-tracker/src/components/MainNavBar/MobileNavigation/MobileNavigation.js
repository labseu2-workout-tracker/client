import React from 'react';
import Button from '../../Button/Button'
import NavigationItems from '../NavigationItems/NavigationItems';
import './MobileNavigation.css';

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
    </ul>
  </nav>
);

export default mobileNavigation;
