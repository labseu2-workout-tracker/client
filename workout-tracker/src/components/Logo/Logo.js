import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const logo = props => <div className="logo-container">
    <Link to='/workouts'>
   <h1 className="logo">Be<span>Fit</span></h1>
    </Link>
  
    </div>

export default logo;
