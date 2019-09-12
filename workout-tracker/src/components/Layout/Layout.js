import React from 'react';
import "antd/dist/antd.css";
import { Layout } from "antd";
import Auth from "../../auth/auth";
import styled from 'styled-components'

const { Header, Content, Sider } = Layout;

class MainLayout extends React.Component {
  state = {
    isAuth: false
  }
  
  componentDidMount = () => {
    if (Auth.isAuthenticated()) {
      return this.setState({ isAuth: !this.state.isAuth})
    }
  }

  componentWillUnmount = () => {
    if (Auth.isAuthenticated()) {
      return this.setState({ isAuth: !this.state.isAuth})
    }
  }


  render() {
    return (
      <StyledContainer>
        {!Auth.isAuthenticated() ? <Header>{this.props.header}</Header> : <Sider>{this.props.sider}</Sider> }
        {this.props.mobileNav}
        <Content>{this.props.routes}</Content>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: ${(props) => props.isAuth ? "column" : "row"};
  .ant-layout-sider {
    padding: 0.5rem;
  .ant-layout-content {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  .nav-items {
    padding: 24px 0;
  }
}
`

export default MainLayout;

// import React from 'react';
// import "antd/dist/antd.css";
// import { Layout } from "antd";
// import './Layout.css';

// const { Header, Content } = Layout;

// const MainLayout = props => (
//   <>
//     <Header className="main-header">{props.header}</Header>
//     {props.mobileNav}
//     <Content className="content">{props.routes}</Content>
//   </>
// );

// export default MainLayout;