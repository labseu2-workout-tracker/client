import React from 'react';
import MainNavBar from '../MainNavBar/MainNavBar';
import styled from 'styled-components';

const StyledHeader = styled.div`

`;

const Header = () => {
  return ( <div>
    <h1>Logo</h1>
    <MainNavBar />
    <i class="fa fa-wrench"></i>
  </div> );
}
 
export default Header;