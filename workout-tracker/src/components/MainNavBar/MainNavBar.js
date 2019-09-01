import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledMainNavBar = styled.div`
a {
  padding:  1rem;
  margin: 1rem;
  color:#0086c9;
  text-decoration: none;
}
`; 

const MainNavBar = () => {
  const navButtons = ["Dashboard", "Workout", "Exercises", "Contact", "About"];
  return (
    <StyledMainNavBar>
      {navButtons.map((button, index) =>
        <NavLink key={index} to={`/${button}`}>
          {button}
        </NavLink>
        )}
    </StyledMainNavBar>
  );
};

export default MainNavBar;
