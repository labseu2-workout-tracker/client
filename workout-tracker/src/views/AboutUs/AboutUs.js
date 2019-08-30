import React from 'react';
import './AboutUs.css';
import gym from '../../assets/avatar/gym.jpg';
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
      <section className="container">
        <div className="container">
          <h1>Meet The Team</h1>
          <div className="card-wrapper">
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={tale} alt="profile" className="profile-img" />
              <h1>Antonio Talent</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card 2 yusuf */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={yusuf} alt="profile" className="profile-img" />
              <h1>Yusuf Abdulkarim</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card 3 Remi */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={remi} alt="profile" className="profile-img" />
              <h1>Remi Becheru</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card 4 Kelechi */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={kelechi} alt="profile" className="profile-img" />
              <h1>Kelechi Ogbonna</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card 5 benjamin */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={benjamin} alt="profile" className="profile-img" />
              <h1>Benjamin Grabow</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card 6 matts */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={matt} alt="profile" className="profile-img" />
              <h1>Matthew Locklin</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/*  card 7 wasui card */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={wasiu} alt="profile" className="profile-img" />
              <h1>Wasiu Idowu</h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card seven tigran */}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={tigran} alt="profile" className="profile-img" />
              <h1>Tigran Hamaysan </h1>
              <p className="job-title">Full Stack Developer</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
                </li>               
              </ul>
            </div>
            {/* card 8  Sean*/}
            <div className="card">
              <img src={gym} alt="card background" className="card-img" />
              <img src={sean} alt="profile" className="profile-img" />
              <h1>Shaun Carmody</h1>
              <p className="job-title">Team Lead</p>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="htt" className="btn">
                Contact
              </a>
              <ul className="social-media">
                <li>
                  <a href="http"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="http"><i className="fab fa-linkedin-square"></i></a>
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
