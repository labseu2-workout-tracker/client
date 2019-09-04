import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { fetchSettings } from "../../store/actions/settingActions.js"
// We must wait for new merging where I have the new actions



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
    if (this.state.email && this.state.message.length > 10) {
      // We must add logic in the backend and here
      // for sending the message to our project email
      // this.props.sendMessage()...
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      alert("Email and message are required.");
    }
  };

  render() {
    return (
     <>
     <section className="contact">
     <h1 className="section-header">Contact Us</h1>
      
      <div className="contact-wrapper">
        <form className="form-horizontal" >
           
          <div className="form-group" id="POST">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="First Name:" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="Last Name:" name="lastName" value={this.state.lastName} onChange={this.handleChange}  />
            </div>
          </div>
    
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" placeholder="Email:" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
          </div>
    
          <textarea className="form-control" rows="10" placeholder="Message:" name="message" value={this.state.message} onChange={this.handleChange} />
          
          <button className="send-button" id="submit" type="submit" value="SEND" onClick={this.sendMessage}> <h3 className="send-text">Send</h3>
          </button>
          
        </form>
        
        <div className="direct-contact-container">
    
    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">BeFit | EU</span></i></li>
      
      <li className="list-item"><i className="fa fa-user fa-2x"><span className="contact-text phone"><a href="htt">Help Desk</a></span></i></li>
      <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
      <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
      
      <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:benjamin_grabow@gmx.de" title="Send me an email">info@befit.com</a></span></i></li>
      
    </ul>

   

    <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

  </div>
         
        
      </div>
     </section>
     </>
        
    );
  }
}

const mapStateToProps = state => {
  return {
    // settings: state.settings.settings,
    // We must wait for new merging where I have the new reducer
  };
};

export default connect(
  mapStateToProps
  // { fetchSettings }
)(ContactPage);
