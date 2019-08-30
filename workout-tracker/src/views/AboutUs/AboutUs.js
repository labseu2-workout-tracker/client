import React from 'react';
import tale from '../../assets/avatar/tale.jpg';


const About = () => {
    return <>
    <section className="container">
            <div className="container">
                <h1>Meet The Team</h1>
                <div className="card-wrapper">
                    <div className="card">
                    <img src={tale} alt="card background" className="card-img"/>
                    <img src={tale} alt="profile" className="profile-img"/>
                    <h1>Antonio Talent</h1>
                    </div>
                </div>
               </div> 
            </section>
    </>

  };
  
export default About;