import React from 'react';
import { Input, Button, Layout, Menu, Card, Dropdown, Modal } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  fetchExercises,
  showMuscleGroup,
  showSingleExercise,
  loadMore,
  searchExercise,
  showEquipment
} from '../../store/actions/exerciseActions';

const { Header, Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

const StyledAllExercises = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 7rem;
  }

  .search-container {
    display: flex;
    justify-content: center;
  }

  .search {
    width: 60%;
    margin-top: 0.35rem;
  }

  .dropdowns {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .first-picture,
  .second-picture {
    width: 30%;
    height: 15rem;
    padding: 1rem;
  }

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

  @media (max-width: 768px) {
    .first-picture,
    .second-picture {
      width: 40%;
      height: 15rem;
      padding: 1rem;
    }
  }

  @media (max-width: 576px) {
    .header {
      height: 12rem;
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

    .first-picture,
    .second-picture {
      width: 50%;
      height: 10rem;
      padding: 1rem;
    }
  }
`;

class AllExercises extends React.Component {
  state = { visible: false };

  showModal = (id) => {
    this.props.showSingleExercise(id);
    this.setState({
      visible: true
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e) => {
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
      'Neck',
      'Lats',
      'Middle Back',
      'Lower Back',
      'Shoulders',
      'Chest',
      'Forearms',
      'Hamstrings',
      'Calves',
      'Biceps',
      'Triceps',
      'Traps',
      'Abdominals',
      'Glutes',
      'Quadriceps',
      'Adductors',
      'Abductors'
    ];

    const equipment = [
      'Bands',
      'Foam Roll',
      'Barbell',
      'Kettlebells',
      'Body Only',
      'Machine',
      'Cable',
      'Medicine Ball',
      'Dumbbell',
      'None',
      'E-Z Curl Bar',
      'Other',
      'Exercise Ball'
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
                onSearch={(exercise_name) =>
                  this.props.searchExercise(exercise_name)
                }
              />
            </div>

            <div className="dropdowns">
              <Dropdown
                overlay={
                  <Menu
                    onClick={(value) =>
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
                  <i className="fa fa-arrow-down down down-hidden" />
                  <Button type="primary">Muscles</Button>
                  <i className="fa fa-arrow-down down" />
                </div>
              </Dropdown>
              <Dropdown
                overlay={
                  <Menu
                    onClick={(value) =>
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
                  <i className="fa fa-arrow-down down down" />
                  <Button type="primary">Equipment</Button>
                  <i className="fa fa-arrow-down down down-hidden" />
                </div>
              </Dropdown>
            </div>
          </Header>
          <Layout>
            <Layout
              style={{
                backgroundColor: '#FFF'
              }}
            >
              <Content
                style={{
                  background: '#fff',
                  margin: 0,
                  minHeight: 280
                }}
              >
                {this.props.exercises ? (
                  this.props.exercises.map((exercise, index) => {
                    return (
                      <Card
                        key={index}
                        cover={
                          <div>
                            <div className="images">
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
                          </div>
                        }
                        actions={[
                          <i
                            className="fa fa-info-circle"
                            onClick={() =>
                              this.props.showSingleExercise(exercise.id)
                            }
                          />,
                          <div>
                            <Button
                              type="primary"
                              onClick={() => this.showModal(exercise.id)}
                            >
                              Open Modal
                            </Button>
                            <Modal
                              title={this.props.singleExercise[0].exercise_name}
                              visible={this.state.visible}
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                            >
                              {this.props.singleExercise ? (
                                <div>
                                  <Card
                                    hoverable
                                    style={{ width: "100%" }}
                                    cover={
                                      <video className=""controls loop autoplay>
                                      <source src={this.props.singleExercise[0].video} type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                    }
                                  >
                                    <Meta
                                      title= {this.props.singleExercise[0].exercise_name}
                                      description={<div className="description">
                                      {this.props.singleExercise[0].description}
                                    </div>}
                                    />
                                    <div className="div-para">
                                    <p>
                                      {' '}
                                      Level:{' '}
                                      {this.props.singleExercise[0].difficulty}
                                    </p>
                                    <p>
                                      {' '}
                                      Type: {this.props.singleExercise[0].type}
                                    </p>
                                    <p>
                                      Target:{' '}
                                      {this.props.singleExercise[0].muscle}
                                    </p>
                                    <p>
                                      {' '}
                                      Equipment:{' '}
                                      {this.props.singleExercise[0].equipment}
                                    </p>
                                  </div>
                                  </Card>
                                  ,

                                  
                                </div>
                              ) : null}
                            </Modal>
                          </div>,
                          <i className="fa fa-plus-square" />
                        ]}
                      >
                        <Meta
                          title={exercise.exercise_name}
                          pageHeader
                          description={
                            <div>
                              {' '}
                              <p
                                style={{ padding: '0' }}
                              >{`${exercise.muscle} with ${exercise.equipment}`}</p>
                            </div>
                          }
                        />
                      </Card>
                    );
                  })
                ) : (
                  <Card>
                    <h1>No Search Results</h1>
                  </Card>
                )}
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
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </StyledAllExercises>
    );
  }
}

const mapStateToProps = (state) => {
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
