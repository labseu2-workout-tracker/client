import React from "react";
// import './AllExercises.css';
import { Input, Button, Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// const { Search } = Input;
// const { Header, Footer, Sider, Content } = Layout;

const AllExercises = props => {
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
    "Medicine Ball,",
    "Dumbbell",
    "None",
    "E-Z Curl Bar",
    "Other",
    "Exercise Ball"
  ];

  return (
//     <div>
  
//      {/* <Layout>
//       <Sider>Sider</Sider>
//       <Layout>
//         <Header>Header</Header>
//         <Content>Content</Content>
//         <Footer>Footer</Footer>
//       </Layout> */}
    

        
//           <Search
//             placeholder="input search text"
//             enterButton="Search"
//             style={{ width: "40%", marginTop: "1rem" }}
//             onSearch={props.searchForName}
//           />
        

        
//             <h1>Muscles</h1>
//             {muscles.map((muscleGroup, index) => (
           


// <Button type="primary"   key={index}
//                 onClick={props.showMuscleGroup}>{muscleGroup}</Button>
//             ))}
         
         
         
          
//             {props.exercises
//               ? props.exercises.map((exercise, index) => {
//                   return (
//                     <div
//                       onClick={() => props.showSingleExercise(exercise.id)}
//                       className="exercise"
//                       key={index}
//                     >
//                       <img
//                         className="img"
//                         src={exercise.picture_one}
//                         alt="exercise"
//                       />

//                       <div className="column">
//                         <p>{exercise.exercise_name}</p>
//                         <p>
//                           Muscle Targeted: <span>{exercise.muscle}</span>
//                         </p>
//                         <p>
//                           Equipment Type: <span>{exercise.equipment}</span>
//                         </p>
//                       </div>
//                       <img
//                         className="img"
//                         src={exercise.picture_two}
//                         alt="exercise"
//                       />
//                       {/* <ExerciseRating
//                         className='img'
//                         exerciseRating={Number(
//                          exercise.exercise_ratings.split('.').join('')
//                         )}
//                       /> */}
//                     </div>
//                   );
//                 })
//               : null}
        
//             <h1>Equipment</h1>
//             {equipment.map((equipment, index) => (
//               <button className="btn" key={index} onClick={props.showEquipment}>
//                 {equipment}
//               </button>
//             ))}
       
//         {/* <div className='butto'>
//         <button onClick={props.loadMore} className='new-button'>
//           Load More
//         </button>
//     </div> */}
    
//     </div>

<Layout>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                Muscles
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
};

export default AllExercises;
