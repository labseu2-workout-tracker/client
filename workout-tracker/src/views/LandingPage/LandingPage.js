import React from 'react';
import './LandingPage.css';
import Button from '../../components/Button/Button';
import LandingRight from '../../components/LandingRight/LandingRight';
import bg from '../../assets/landingpage/bg-shape.svg';
import run from '../../assets/landingpage/diet3.gif';
import lift from '../../assets/landingpage/haha.gif';
import fapp from '../../assets/landingpage/diet.gif';

const LandingPage = () => {
  // use a hook for fetch stuffmaybe videos from our API
  return (
    <>
      <section>
        <div className="landingname">
          <img src={bg} alt="background Shape" id="bg" />
          <h1>
            Be<span>Fit</span>
            <br />
            Workout Tracker
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni
            virtuti vitium contrario nomine opponitur. Hoc est non dividere, sed
            frangere.
          </p>
          <div>
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="img-1">
          <img src={run} alt="first" id="landingright-img" />
          <div className="landingRight"></div>
        </div>
        <div className="img-2">
          <img src={run} alt="first" id="landingright-img" />
          <div className="landingRight"></div>
        </div>
      </section>

    </>
  );
};
export default LandingPage;
