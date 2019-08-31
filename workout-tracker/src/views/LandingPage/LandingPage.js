import React from 'react';
import './LandingPage.css';
import Button from '../../components/Button/Button';
import bg from '../../assets/landingpage/bg-shape.svg';
import run from '../../assets/landingpage/diet3.gif';
import lift from '../../assets/landingpage/haha.gif';
import fapp from '../../assets/landingpage/diet.gif';

const LandingPage = () => {
  // use a hook for fetch stuffmaybe videos from our API
  return (
    <>
      <section className="card-wrapper">
        <div className="landingname">
     
          <h1 id="h1">
            Be<span>Fit</span>
            <br />
            Tracker
          </h1>
          <hr />
          <p className="heading" id="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni
            virtuti vitium contrario nomine opponitur. Hoc est non dividere, sed
            frangere.
          </p>
          <div>
            <Button>Learn More</Button>
          </div>
        </div>
    
        <div className="card">
              <img src={fapp} alt="card background" className="card-img" />
              <img src={fapp} alt="profile" className="profile-img" />
              <h1>User Structured</h1>
              <p className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="htt" className="btn">
                Join
              </a>

            </div>

        <div className="card">
              <img src={run} alt="card background" className="card-img" />
              <img src={lift} alt="profile" className="profile-img" />
              <h1>Workout Manuals</h1>
              <p className="job-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="htt" className="btn">
                Join
              </a>

            </div>
      </section>

    </>
  );
};
export default LandingPage;
