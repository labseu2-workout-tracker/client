import React from 'react';
import { connect } from 'react-redux';
import { fetchSettings, updateSettings } from '../../store/actions/settingActions';
import styled from 'styled-components';

const StyledSettings = styled.div``;

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {
  this.props.fetchSettings();
  };
'push_notification', 'email_notification', 'body_weight', 'body_height', 'user_difficulty', 'gender'
  render() { 
    return ( 
      <StyledSettings>
      {this.props.settings ? (this.props.settings.map(setting => {
        return <div>
          <input value={this.state.email} onChange={this.handleChange} placeholder={setting.email} name="email" />
          <input value={this.state.weight} onChange={this.handleChange} placeholder={setting.body_weight} name="weight" />          
        </div>
      })) : null}
      </StyledSettings>
     );
  }
}

const mapStateToProps = state => {
  return {
// settings: state.settings.settings,
  };
};
 
export default connect(mapStateToProps, { fetchSettings, updateSettings })(Settings);