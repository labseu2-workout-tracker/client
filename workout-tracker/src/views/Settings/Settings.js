import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  );
  }
}

const mapStateToProps = state => {
  return {
// settings: state.settings.settings,
  };
};
 
export default connect(mapStateToProps)(Settings);