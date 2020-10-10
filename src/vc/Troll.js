import React from 'react';
import logo from './images/CoFED_logo.png';
import rlImage from './images/rl-image.png';
import Geophysics from './images/Geophysics.png';
import './App.css';

//things to do
//1) nav bar
//3) organize files
//4) make the fonts and style look better
 
function App() {
  return (
    //nav bar
    <div>
      <div class="navbar">
          <u1 class="menu-area">
            <li><a href="#home">Home </a></li>
            <li><a href="#about">About </a></li>
            <li><a href="#experinces">Experinces </a></li>
            <li><a href="#projects">Projects </a></li>
            <li><a href="#contact"> Contact </a></li>
          </u1>
      </div>

    {/*Intro page */}
      <div className="intro-page" id="home">
        <div className="intro-page">
          <h1>Eric Hao</h1>
      </div>
      </div>


    {/*About page */}
      <div className="intro-page" id="about">
        <div className="intro-box">
          <h1>About</h1>
          <h3>I am currently a student at the University
             of California Berkeley, intending to major
              in computer science.</h3>
          <h3>.........</h3>
            <h3>I have always had a passion for STEM and love the thrill of learning.
             I truly believe education is a beautfiul and generous thing. </h3>
      </div>
      </div>

    {/*Projects page */}
    <div className="intro-page" id="projects">
        <div className="intro-box">
          <h1>Projects</h1>
          <h3>  CoFED (Cooperative Food Empowerment Directive) is a non-profit 
              organization that partners with young folks of color to build
              food and land co-ops.</h3>
          <h3>.........</h3>
            <h3> I’m currently working with a wonderful team and CoFed
            to build a web portal for co-ops to connect with each other.</h3>
      </div>
      </div>

    {/*Experinces page */}
    <div className="intro-page" id="experinces">
        <div className="intro-box">
          <h1>Experinces</h1>
          <h3> Reinforment Learning Research (2019)</h3>
          <h3> Under the guidance of Dr. Gasarch from the University of Maryland, 
            I used the Q-Learning algorithmn to train a machine to play 1, 2, 3 NIM. 
            This research was purely explorative.</h3>
          <h3>.........</h3>
          <h3> Geophysics Research (2018)</h3>
          <h3> I invested the phase changes of the water-methane-carbon dioxide
              system using Raman Spectroscopy
              at the Cargnegie Geophysics Lab. </h3>
      </div>
      </div>


    {/*Contact page */}
    <div className="intro-page" id="contact">
        <div className="intro-box">
          <h1>Contact</h1>
          <h3>Email: ehao@berkeley.edu</h3>
          <h3>.........</h3>
          <h3>Phone: 240 - 644 - 3738 </h3>
      </div>
      </div>
          



    </div>



    /* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */
  );
}

export default App;
