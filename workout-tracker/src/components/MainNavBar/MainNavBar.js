import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavBar = () => {
  const navButtons = ["Home", "Workouts", "Exercises", "Contact"];
  return ( 
    <nav>
      {navButtons.map(button => <NavLink to={`/${button}`}>{button}</NavLink>)}
    </nav>
   );
}
 
export default MainNavBar;