import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

const StyledContactPage = styled.div`
`;

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledContactPage>
        <Header/>
      </StyledContactPage>
      <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="John Doe" />
     );
  }
}
 
export default ContactPage;