import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { small_space, medium_space_2 } from '../variables/spacing';
import { black, blue } from '../variables/colors'

const SideNavItem = ({icon, text, path}) => {
    return (
        <div className='side-nav-item'>
              <NavLink to={path} activeClassName="active-nav"><i className="material-icons">{icon}</i></NavLink>
              <NavLink to={path} activeClassName="active-nav"><span>{text}</span></NavLink>
        </div>
    )
}