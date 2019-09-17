import React from "react";
import {
  Input,
  Button,
  Layout,
  Menu,
  Card,
  Dropdown,
  Modal,
  Row,
  Col
} from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  fetchExercises,
  showMuscleGroup,
  showSingleExercise,
  loadMore,
  searchExercise,
  showEquipment
} from "../../store/actions/exerciseActions";
import "./SingleExcercise.css";

const { Header, Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

const StyledAllExercises = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: auto;
    margin: 0 auto;
    max-width: 1000px;
  }
  .load-button-container {
    margin: 0 auto;
  }
  .ant-row {
    margin: 0 auto;
  }
  #images {
    position: relative;
    height: 175px;
    width: 175px;
    margin: 0 auto;
  }
  .first-picture {
    height: 150px;
    width: 150px;
  }
  .second-picture {
    height: 150px;
    width: 150px;
  }

  #images img {
    position: absolute;
    left: 0;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
  }

  @keyframes cf3FadeInOut {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 1;
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  #images img.second-picture {
    animation-name: cf3FadeInOut;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
  }

  .search-container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .search {
    width: 80%;
    margin-top: 0.35rem;
  }

  .dropdowns {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    font-weight: bold;
  }

  /* .first-picture {
    width: 175px;
    height: 175px;
    padding: 1rem;
  } */

  i {
    font-size: 2rem;
  }

  .down {
    font-size: 1rem;
    margin: 1rem;
    color: #22a0d6;
  }

  .down-hidden {
    display: none;
    color: #22a0d6;
  }

  .load-more {
    font-size: 1.5rem;
  }
  /* 
  @media (max-width: 768px) {
    .first-picture{
      width: 150px;
      height: 150px;
      padding: 1rem;
      margin: 0 auto;
    }
  } */

  @media (max-width: 576px) {
    .header {
      height: 12rem;
      margin: 0 auto;
      max-width: 576px;
    }

    .search-container {
      width: 100%;
    }

    .search {
      width: 90%;
    }

    .dropdowns {
      flex-direction: column;
    }

    .down {
      margin: 0.5rem;
    }

    .down-hidden {
      display: inline;
    }

    /* .first-picture {
      width: 125px;
      height: 125px;
      padding: 1rem;
    } */
  }
`;

class AllExercises extends React.Component {
  state = { visible: false };

  showModal = id => {
    this.props.showSingleExercise(id);
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  componentDidMount = () => {
    this.props.fetchExercises();
  };

  render() {
    const muscles = [
      "Neck",
      "Lats",
      "Middle Back",
      "Lower Back",
      "Shoulders",
      "Chest",
      "Forearms",
      "Hamstrings",
      "Calves",
      "Biceps",
      "Triceps",
      "Traps",
      "Abdominals",
      "Glutes",
      "Quadriceps",
      "Adductors",
      "Abductors"
    ];

    const equipment = [
      "Bands",
      "Foam Roll",
      "Barbell",
      "Kettlebells",
      "Body Only",
      "Machine",
      "Cable",
      "Medicine Ball",
      "Dumbbell",
      "None",
      "E-Z Curl Bar",
      "Other",
      "Exercise Ball"
    ];

    return (
      <StyledAllExercises>
        <Layout>
          <Header className="header">
            <div className="search-container">
              <Search
                placeholder="input search text"
                enterButton="Search"
                className="search"
                onSearch={exercise_name =>
                  this.props.searchExercise(exercise_name)
                }
              />
            </div>

            <div className="dropdowns">
              <Dropdown
                overlay={
                  <Menu
                    onClick={value =>
                      this.props.showMuscleGroup(value.item.props.children)
                    }
                  >
                    {muscles.map((muscleGroup, index) => (
                      <Menu.Item key={index}>{muscleGroup}</Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <div className="ant-dropdown-link">
                  <i className="fa fa-chevron-down down down-hidden" />
                  <Button type="primary">Muscles</Button>
                  <i className="fa fa-chevron-down down" />
                </div>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu
                    onClick={value =>
                      this.props.showEquipment(value.item.props.children)
                    }
                  >
                    {equipment.map((equipment, index) => (
                      <Menu.Item key={index}>{equipment}</Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <div className="ant-dropdown-link">
                  <i className="fa fa-chevron-down down down" />
                  <Button type="primary">Equipment</Button>
                  <i className="fa fa-chevron-down down down-hidden" />
                </div>
              </Dropdown>
            </div>
          </Header>
          <Layout>
            <Layout
              style={{
                backgroundColor: "#fff"
              }}
            >
              <Content
                style={{
                  height: "auto",
                  display: "flex",
                  flexFlow: "row wrap",
                  maxWidth: "1000px",
                  margin: "0 auto"
                }}
              >
                <Row gutter={16} style={{ margin: "0 auto" }}>
                  {this.props.exercises && this.props.exercises.length > 0 ? (
                    this.props.exercises.map((exercise, index) => {
                      return (
                        <Col
                          xs={{ span: 16 }}
                          sm={{ span: 10 }}
                          lg={{ span: 8 }}
                          style={{
                            margin: "0 auto",
                            justifyContent: "space-around"
                          }}
                        >
                          <Card
                            style={{
                              alignContent: "center",
                              textAlign: "center",
                              paddingTop: "3rem",
                              margin: "1rem"
                            }}
                            key={index}
                            cover={
                              <div id="images">
                                <img
                                  className="first-picture"
                                  alt="example"
                                  src={exercise.picture_one}
                                />
                                <img
                                  className="second-picture"
                                  alt="example"
                                  src={exercise.picture_two}
                                />
                              </div>
                            }
                            actions={[
                              <div>
                                <Button
                                  type="primary"
                                  onClick={() => this.showModal(exercise.id)}
                                >
                                  More Info
                                </Button>
                                <Modal
                                  title={
                                    this.props.singleExercise
                                      ? this.props.singleExercise[0]
                                          .exercise_name
                                      : null
                                  }
                                  visible={this.state.visible}
                                  // {this.props.singleExercise[0].closeExercise}
                                  onOk={this.handleOk}
                                  onCancel={this.handleCancel}
                                >
                                  {this.props.singleExercise ? (
                                    <div>
                                      <Card
                                        hoverable
                                        style={{ width: "100%" }}
                                        cover={
                                          <video className="" controls autoplay>
                                            <source
                                              src={
                                                this.props.singleExercise[0]
                                                  .video
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        }
                                      >
                                        <Meta
                                          title={
                                            this.props.singleExercise[0]
                                              .exercise_name
                                          }
                                          description={
                                            <div className="description">
                                              {
                                                this.props.singleExercise[0]
                                                  .description
                                              }
                                            </div>
                                          }
                                        />
                                        <div className="div-para">
                                          <p>
                                            {" "}
                                            Level:{" "}
                                            {
                                              this.props.singleExercise[0]
                                                .difficulty
                                            }
                                          </p>
                                          <p>
                                            {" "}
                                            Type:{" "}
                                            {this.props.singleExercise[0].type}
                                          </p>
                                          <p>
                                            Target:{" "}
                                            {
                                              this.props.singleExercise[0]
                                                .muscle
                                            }
                                          </p>
                                          <p>
                                            {" "}
                                            Equipment:{" "}
                                            {
                                              this.props.singleExercise[0]
                                                .equipment
                                            }
                                          </p>
                                        </div>
                                      </Card>
                                      ,
                                    </div>
                                  ) : null}
                                </Modal>
                              </div>
                            ]}
                          >
                            <Meta
                              title={exercise.exercise_name}
                              pageHeader
                              description={
                                <div>
                                  {" "}
                                  <p
                                    style={{ padding: "0" }}
                                  >{`${exercise.muscle} with ${exercise.equipment}`}</p>
                                </div>
                              }
                            />
                          </Card>
                        </Col>
                      );
                    })
                  ) : (
                    <Card>
                      <h1>No Search Results</h1>
                    </Card>
                  )}
                </Row>
              </Content>
              <div className="load-button-container">
                {this.props.arrayOfCurrentExercises ? (
                  this.props.indexOfLastExercise ===
                    this.props.arrayOfCurrentExercises.length ||
                  this.props.arrayOfCurrentExercises.length < 5 ? null : (
                    <Button
                      className="load-more"
                      type="primary"
                      onClick={this.props.loadMore}
                    >
                      Load More
                    </Button>
                  )
                ) : null}
              </div>
            </Layout>
          </Layout>
        </Layout>
      </StyledAllExercises>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises.exercises,
    indexOfLastExercise: state.exercises.indexOfLastExercise,
    arrayOfCurrentExercises: state.exercises.arrayOfCurrentExercises,
    singleExercise: state.exercises.singleExercise
  };
};

export default connect(
  mapStateToProps,
  {
    fetchExercises,
    showMuscleGroup,
    showSingleExercise,
    loadMore,
    searchExercise,
    showEquipment
  }
)(AllExercises);
