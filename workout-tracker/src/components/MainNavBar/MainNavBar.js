import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledMainNavBar = styled.nav`
display: flex;
justify-content: space-between;
`;

const MainNavBar = () => {
  const navButtons = ["Home", "Workouts", "Exercises", "Contact"];
  return (
    <nav>
      {navButtons.map((button, index) => (
        <NavLink key={index} to={`/${button}`}>
          {button}
        </NavLink>
      ))}
    </nav>
  );
};

export default MainNavBar;
