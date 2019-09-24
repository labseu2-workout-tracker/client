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
        {!Auth.isAuthenticated() ? (
          <Header style={{ backgroundColor: "#0086c9" }}>
            {this.props.header}
          </Header>
        ) : (
          ""
        )}
        {this.props.mobileNav}
        <div className="content-container">
          {Auth.isAuthenticated()
            ? this.props.location.pathname !==
                "/workouts/new/add_exercises" && (
                <Sider breakpoint="lg" collapsedWidth="0">
                  {this.props.sider}
                </Sider>
              )
            : ""}
          <Content>
            {this.props.routes}
            <Footer>
              <div>
                <div className='footer-content'>
                  <div>
                    <h5>Our statement</h5>
                    <p>
                      This is our important statemant... 
                    </p>
                  </div>
                  <div>
                    <h5>Contact us</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className='copy'>
                  <span>© Copyright 2019 - 2020</span>
                  <p>All rights reserved. Powered by <a href="#!">
                  BeFit
                  </a></p>
                </div>
              </div>
            </Footer>
          </Content>
        </div>
      </StyledContainer>
    );
  }
}

const Footer = styled.div`

a {
  color:white;
}

.copy {
  padding: 5px;
  width: 300px;
  margin: 0 auto;

  span {
    width:100px;
    margin: 33px;
  }
}

p {
  padding: 0;
}

div {
  background-color:#0086c9;
}

  width: 100%;
  height: 100px;
  background: #0086c9;
`;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  .content-container {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .ant-layout-content {
    min-height: 100vh;
    min-width: 0;
    overflow: auto;
  }

  .ant-layout-sider {
    position: absolute;
    z-index: 1000;
    background: #0086c9;
    height: 100vh;
  }

  .nav-items {
    padding: 2rem 0.5rem;
  }

  @media (min-width: 992px) {
    .ant-layout-sider {
      padding: 0.5rem;
      overflow: auto;
      position: relative;
    }
  }
`;
export default MainLayout;
