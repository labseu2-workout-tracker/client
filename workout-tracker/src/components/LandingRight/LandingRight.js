import React from 'react';
import './LandingRight.css';
import run from '../../assets/landingpage/diet3.gif';
import lift from '../../assets/landingpage/haha.gif';
import fapp from '../../assets/landingpage/diet.gif';

const LandingRight = () => {
    return(
       <section>
         <img src={run} alt="first" id="landingright-img"/>
         <div className="landingRight">
         </div>
       </section>
    );
}
export default LandingRight;