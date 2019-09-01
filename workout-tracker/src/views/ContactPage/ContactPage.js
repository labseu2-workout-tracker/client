import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { fetchSettings } from "../../store/actions/settingActions.js"
// We must wait for new merging where I have the new actions

const StyledContactPage = styled.div`
display: flex;
flex-direction: column;
text-align: left;
padding: 0 1.5rem;

h2 { 
  font-weight: 400;
  line-height: 3.4rem;
}

.question {
  color: black;
    line-height: 3.2rem;
    margin: 0;
}

p {
  font-size: .7rem;
  color: #828698;
  margin: 0 0 .5rem 0;
}

input {
  border: 1px solid #e3eaee;
    border-radius: 4px;
    line-height: 1.2em;
}
  
  .column {
    display: flex;
    flex-direction: column;
    padding: .5rem 0;
    width: 100%;
  }

  .column-start {
   padding-right: .5rem;
  }

  .column-end {
   padding-left: .5rem;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;

    input {
      width: 100%;
      height: 1.5rem;
    }
  }

  .messageInput {
    height: 8rem;
    width: 100%;
  }

  button {
    border-color: transparent;
    width: 7rem;
    height: 1.8rem;
    font-size: .7rem;
    line-height: 1.6rem;
    border-radius: 4px;
    border: 1px solid #f0f4f6;
    color: #212432;
    cursor: pointer;
    letter-spacing: .5px;
    text-align: center;
    background: linear-gradient(46deg,#2eb7ce,#4296cb);
  }
`;

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: this.props.settings ? this.props.settings[0].email : "",
      phone: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendMessage = () => {
    // We must add logic in the backend and here
    // for sending the message to our project email
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  render() {
    return (
      <StyledContactPage>
        <h2>Contact Us</h2>
        <p className="question">Have a question about a product, feedback, or business
          inquiry for Workout Tracker?
        </p>
        
         
    
        <div className="row">
          <div className="column column-start">
            <p>First Name</p>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="John"
            />
          </div>
          <div className="column column-end">
            <p>Last Name</p>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Doe"
            />
          </div>
          </div>
          <div className="row">
          <div className="column column-start">
            <p>Email</p>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="JohnDoe@gmail.com"
            />
          </div>
          <div className="column column-end">
            <p>Phone</p>
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="(Optional)"
            />
          </div>
          </div>
          <div className="column">
          <p>Message</p>
          <input
            className="messageInput"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
          />
          </div>
          <button onClick={this.sendMessage}>Send</button>
        
        
      </StyledContactPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    // settings: state.settings.settings,
// We must wait for new merging where I have the new reducer    
  };
};

export default connect(mapStateToProps, 
  // { fetchSettings }
  )(ContactPage);
