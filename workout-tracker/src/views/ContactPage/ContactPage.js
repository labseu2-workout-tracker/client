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
        <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="John Doe" />
        <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="JohnDoe@gmail.com" />
        <input name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="(Optional)" />        
        </StyledContactPage>
     );
  }
}
 
export default ContactPage;