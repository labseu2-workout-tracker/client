import React from 'react';
// import logoImage from '../../assets/images/logo-svg-white.svg'
import './Logo.css';
import { Link } from 'react-router-dom';

const logo = props => <div className="logo-container">
    <Link to='/workouts'>
    <h3 id="newstuff">
            Be<span>Fit</span>
          </h3>
    </Link></div>

export default logo;
