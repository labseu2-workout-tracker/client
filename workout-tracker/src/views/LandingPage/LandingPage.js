import React from 'react';
import './LandingPage.css';
import bg from '../../assets/landingpage/bg-shape.svg';
import run from '../../assets/landingpage/diet3.gif';
import lift from '../../assets/landingpage/haha.gif';
import fapp from '../../assets/landingpage/diet.gif';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  // use a hook for fetch stuffmaybe videos from our API
  return (
    <>
      <section className="card-wrapper">
        <div className="land">
     
          <h1 id="h1">
            Be<span>Fit</span>
            <br />
            Tracker
          </h1>
          <hr />
          <p id="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni
            virtuti vitium contrario nomine opponitur. Hoc est non dividere, sed
            frangere.
          </p>
          <div>
          <Link to="/signup" className="btn">
                Sign Up
              </Link>
          </div>
        </div>
    
        <div className="card">
              <img src={bg} alt="card background" className="card-img" />
              <img src={run} alt="profile" className="profile-img" />
              <h1>User Structured</h1>
              <p className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="#" className="btn">
                Find More
              </Link>

            </div>

        <div className="card">
              <img src={fapp} alt="card background" className="card-img" />
              <img src={lift} alt="profile" className="profile-img" />
              <h1>Workout Manuals</h1>
              <p className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="#" className="btn">
                Find More
              </Link>

            </div>
      </section>

    </>
  );
};
export default LandingPage;
