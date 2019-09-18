import React from 'react';
import logoImage from '../../assets/images/logo-svg-white.svg'
import './Logo.css';
import { Link } from 'react-router-dom';

const logo = props => <div className="logo-container"><Link to='/workouts'><img className="image" src={logoImage} alt="logo" /></Link></div>

export default logo;
