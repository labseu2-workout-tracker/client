import React from 'react';
import { Input, Row, Col, Button, Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const AllExercises = props => {
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
    <Layout>
      <Header className='header' style={{ backgroundColor: 'white' }}>
        <div className='logo' />

        <Search
          placeholder='input search text'
          enterButton='Search'
          style={{ width: '60%', marginTop: '.35rem' }}
          onSearch={props.searchForName}
        />
      </Header>
      <Layout>
        <Sider width={'35%'} style={{ background: '#fff' }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key='sub1'
              title={
                <span>
                  <i className='fa fa-running'></i>
                  Muscles
                  <i className='fa fa-running'></i>
                </span>
              }
            >
              {muscles.map((muscleGroup, index) => (
                <Menu.Item
                  key={index}
                  onClick={value =>
                    props.showMuscleGroup(value.item.props.children)
                  }
                >
                  {muscleGroup}
                </Menu.Item>
              ))}
            </SubMenu>

            <SubMenu
              key='sub2'
              title={
                <span>
                  <i className='fa fa-dumbbell'></i>
                  Equipment
                  <i className='fa fa-dumbbell'></i>
                </span>
              }
            >
              {equipment.map((equipment, index) => (
                <Menu.Item
                  key={index}
                  onClick={value =>
                    props.showEquipment(value.item.props.children)
                  }
                >
                  {equipment}
                </Menu.Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Exercises</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {props.exercises
              ? props.exercises.map((exercise, index) => {
                  return (
                    <div
                      onClick={() => props.showSingleExercise(exercise.id)}
                      key={index}
                      style={{ margin: '1rem', cursor: 'pointer' }}
                    >
                      <h6 style={{ fontSize: '1.5rem' }}>
                        {exercise.exercise_name}
                      </h6>
                      <Row
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Col span={8} style={{ width: '33,3%' }}>
                          <img
                            // style={{ width: '13rem', height: '8.7rem' }}
                            className='img'
                            src={exercise.picture_one}
                            alt='exercise'
                          />
                        </Col>
                        <Col span={8} style={{ width: '33,3%' }}>
                          <p>{exercise.muscle}</p>
                          <p>{exercise.equipment}</p>
                        </Col>
                        <Col span={8} style={{ width: '33,3%' }}>
                          <img
                            // style={{ width: '13rem', height: '8.7rem' }}
                            className='img'
                            src={exercise.picture_two}
                            alt='exercise'
                          />
                        </Col>
                      </Row>
                    </div>
                  );
                })
              : null}
            <Button type='primary' onClick={props.loadMore}>
              Load More
            </Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AllExercises;
