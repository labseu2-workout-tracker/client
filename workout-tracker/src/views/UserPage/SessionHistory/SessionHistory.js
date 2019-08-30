import React from 'react';
import styled from 'styled-components'

class SessionHistory extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

        const user = localStorage.getItem("userId")
        return <div>
        <h1>This is the session history</h1>
        <h2>Here you can check out the work you have done!</h2>
        <List>
            <ol>
                <li>
                    <h4>List Item</h4>
                    <p>Qui dolorem ipsum quia dolor sit amet, consectetur nobis est eligendi optio cumque nihil impedit.</p>
                </li>
                <li>
                    <h4>List Item</h4>
                    <p>Et iusto odio dignissimos ducimus qui blanditiis praesen voluptatum deleniti Itaque earum rerumsapiente delectus.</p>
                </li>
                <li>
                    <h4>List Item</h4>
                    <p>Dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ducimus qui blanditiis.</p>
                </li>
                <li>
                    <h4>List Item</h4>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                </li>
            </ol>
        </List>
        </div>
    }
}

export default SessionHistory

const List = styled.div`

width:500px;
margin: 0 auto;
ol {
  counter-reset: section;
}

h3 {
  font-size: 1.65rem;
  margin: 15px 0;
  text-align: center;
}

li { 
  list-style-type: none;
  position: relative;
  font-size: 1.5rem;
  padding: 15px;
  margin-bottom: 15px;
  background: #0e0fee;
  color: #fff;
}

h4 {
  position: relative;
  padding-bottom: 10px;
}

h4:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25px;
  height: 2px;
  background: white;
}

p {
  font-size: .9rem; 
  line-height: 1.4rem;
  margin-top: 15px;
}

li::before {
    counter-increment: section;
    content: counter(section);
    text-align: center;
    display: inline-block;
    color: #000;
    border-radius: 50%;
    position: absolute;
    left: -65px;
    top: 50%;
    transform: translateY(-50%);
    padding: 12px;
    font-size: 2rem;
    width: 25px;
    height: 25px;
    border: 2px solid #000;
}
`