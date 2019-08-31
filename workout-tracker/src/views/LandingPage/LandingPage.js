import React from 'react';
import './LandingPage.css'
import bg from '../../assets/landingpage/bg-shape.svg'

const LandingPage = () => {
    return(
       <section>
        <img src={bg} alt="background Shape" id="bg" />
        <h1>Be<span>Fitr</span><br/>Workout Tracker</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Hoc est non dividere, sed frangere.</p>
       </section>
    );
}
export default LandingPage;