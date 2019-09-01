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
  
}

.question {
  color: black;
}

p {
  color: #828698;
  margin: 0;
}
  
  .column {
    display: flex;
    flex-direction: column;
    padding: .5rem 0;
    width: 100%;
  }

  .column-end {
    display: flex;

    input {
    align-self: flex-end;
    }
  }

  .row {
    display: flex;

    input {
      width: 90%;
    }
  }

  .messageInput {
    height: 8rem;
    width: 100%;
  }

  button {
    background-color: #6bbdfa;
    border-color: transparent;
    width: 20%;
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
      name: "",
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
          <div className="column">
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
          <div className="column">
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
