import React from 'react';
import './AboutUs.css';
import gym from '../../assets/landingpage/off1.gif';
import tale from '../../assets/avatar/tale.jpg';
import kelechi from '../../assets/avatar/kelechi.jpg';
import sean from '../../assets/avatar/sean.jpg';
import tigran from '../../assets/avatar/tigran.jpg';
import matt from '../../assets/avatar/matt.jpg';
import wasiu from '../../assets/avatar/wasiu.jpg';
import yusuf from '../../assets/avatar/yusuf.jpg';
import benjamin from '../../assets/avatar/benjamin.jpg';
import remi from '../../assets/avatar/remi.jpg';

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="team">Meet The Team</h1>
          <div className="card-wrapper">
                        {/* card 3 Remi */}
                        <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={remi} alt="profile" className="profile-img" />
              <h1>Remi Becheru</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="http" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/Becheru888">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={tale} alt="profile" className="profile-img" />
              <h1>Antonio Talent</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/sampler36">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com/in/talentantonio-fsse/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* card 2 yusuf */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={yusuf} alt="profile" className="profile-img" />
              <h1>Yusuf Abdulkarim</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/haywhyze">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/*  card 7 wasui card */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={wasiu} alt="profile" className="profile-img" />
              <h1>Wasiu Idowu</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="http" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/Hoxtygen">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="htthttps://www.linkedin.com/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* card 4 Kelechi */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={kelechi} alt="profile" className="profile-img" />
              <h1>Kelechi Ogbonna</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/Kellswork">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* card 5 benjamin */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={benjamin} alt="profile" className="profile-img" />
              <h1>Benjamin Grabow</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="http" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media"> */}
                {/* <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/BenjaminGrabow">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* card 6 matts */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={matt} alt="profile" className="profile-img" />
              <h1>Matthew Locklin</h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="http" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media"> */}
                {/* <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/Lockers">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* card seven tigran */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={tigran} alt="profile" className="profile-img" />
              <h1>Tigran Asriyan </h1>
              <p className="job-title">Full Stack Developer</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="http" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/hyetigran">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com/in/tigranasriyan/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* card 8  Sean*/}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={sean} alt="profile" className="profile-img" />
              <h1>Shaun Carmody</h1>
              <p className="job-title">Team Lead</p>
              {/* <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <a href="http" className="btn">
                Contact
              </a>
              <ul className="social-media">
                {/* <li className="social-media">
                <a href="https://codepen.io/"><i className="fab fa-codepen"></i></a>
                </li>
                <li className="social-media">
                  <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                </li> */}
                <li className="social-media">
                  <a href="https://github.com/shaunmcarmody">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li className="social-media">
                  <a href="https://www.linkedin.com/in/shaunmcarmody/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
