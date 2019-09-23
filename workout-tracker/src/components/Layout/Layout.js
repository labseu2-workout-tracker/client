import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Auth from "../../auth/auth";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

class MainLayout extends React.Component {
  render() {
    return (
      <StyledContainer>
        {!Auth.isAuthenticated() ? <Header>{this.props.header}</Header> : ""}
        {this.props.mobileNav}
        <div className='content-container'>
        {Auth.isAuthenticated()
        ? this.props.location.pathname !== "/workouts/new/add_exercises" && <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            {this.props.sider}
          </Sider>
          : '' }
        <Content>{this.props.routes}</Content>
        </div>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  .content-container {
    display: flex;
    flex-direction: row;
    overflow: auto;
  }

  .ant-layout-sider {
    padding: 0.5rem;
    background-color: #001529;
  }

  .ant-layout-content {
    min-height: 100vh;
    min-width: 0;
  }

  .nav-items {
    padding: 24px 0;
  }

  @media (max-width: 992px) {
    .ant-layout-sider {
      position: absolute;
      z-index: 1000;
    }
  }

`
export default MainLayout;
