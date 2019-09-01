import React from 'react';
import MainNavBar from '../../components/MainNavBar/MainNavBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
padding-left: 2rem;
color:#0086c9;
text-transform: capitalize;
font-size: 1.4 rem;
margin-bottom: 1rem;
text-align: center;
position: relative;
justify-content: space-between;
align-items: center;
`;

const Header = () => {
  return ( <StyledHeader>
    <h1 >Logo</h1>
    <MainNavBar />
   <div className="user-icon">
   <i className="fa fa-user-circle"></i>
   </div>
  </StyledHeader> );
}
 
export default Header;