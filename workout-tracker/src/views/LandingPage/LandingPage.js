import React from 'react';
import './LandingPage.css'
import bg from '../../assets/landingpage/bg-shape.svg'

const LandingPage = () => {
    return(
       <section>
        <img src={bg} alt="background Shape" id="bg" />
       </section>
    );
}
export default LandingPage;