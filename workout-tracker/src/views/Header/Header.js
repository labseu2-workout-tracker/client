import React from 'react';
import MainNavBar from '../../components/MainNavBar/MainNavBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Header = () => {
  return ( <StyledHeader>
    <h1>Logo</h1>
    <MainNavBar />
    <i class="fa fa-wrench"></i>
  </StyledHeader> );
}
 
export default Header;