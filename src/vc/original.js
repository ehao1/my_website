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
            <li><a href="#home"> (--  Home</a></li>
            <li><a> /</a></li>
            <li><a href="#about"> About</a></li>
            <li><a> /</a></li>
            <li><a href="#experinces"> Experinces</a></li>
            <li><a> /</a></li>
            <li><a href="#projects"> Projects</a></li>
            <li><a> /</a></li>
            <li><a href="#contact"> Contact</a></li>
            <li><endItem> --)</endItem></li>
          </u1>
      </div>

    {/*Intro page */}
      <div className="intro-page" id="home">
        <div className="intro-box">
          <h3>Hey, I'm</h3>
          <h1>Eric Hao</h1>
        </div>
      </div>

    {/*About page */}
      <div className="leftRight-container-left" id="about">
          
          <div className="text-container-right-border">
          <hr/>
          <h1 className="header-no-border">About</h1>
            <div className="text-item">
            <p>
            I am currently a student at the University
             of California Berkeley, intending to major
              in computer science. 
            </p>
            <p>
            I have always had a passion for STEM and love the thrill of learning.
             I truly believe education is a beautfiul and generous thing. 
            </p>
            </div>
          </div>
      </div>

    {/*Experinces page */}
    <div className="leftRight-container-right" id="experinces">
          
          <div>
          <img src={rlImage} className="image-item" alt="rlImage" />
          <img src={Geophysics} className="image-item" alt="Geophysics" />
          </div>

          <div className="text-container">
          <h1 className="header">Experinces</h1>
          <h2 className="sub-header"> Reinforment Learning Research (2019) </h2>
            <div className="text-item">
            <p>
            Under the guidance of Dr. Gasarch from the University of Maryland, 
            I used the Q-Learning algorithmn to train a machine to play 1, 2, 3 NIM. 
            This research was purely explorative.
            </p>
            </div>

            <h2 className="sub-header"> Geophysics Research (2018) </h2>
              <div className="text-item">
              <p>
              I invested the phase changes of the water-methane-carbon dioxide
              system using Raman Spectroscopy
              at the Cargnegie Geophysics Lab. 
              </p>
              </div>
          </div>
          
          
      </div>

    {/*Projects page */}
      <div className="leftRight-container-left" id="projects">
          
          <div className="text-container">
          <hr/>
          <h1 className="header">Projects</h1>
          <h2 className="sub-header"> CoFED web application (2020) </h2>
            <div className="text-item">
            <p>
              CoFED (Cooperative Food Empowerment Directive) is a non-profit 
              organization that partners with young folks of color to build
              food and land co-ops.
            </p>
            <p>
            I’m currently working with a wonderful team and CoFed
            to build a web portal for co-ops to connect with each other.
            </p>
            </div>
          </div>

          <img src={logo} className="image-item" alt="logo" />
      </div>


   {/*Contact */}
   <div className="leftRight-container-right" id="contact">

          <div className="text-container-contact">
          <h1 className="header">Contact</h1>
          <h2 className="sub-header"> Email </h2>
            <div className="text-item">
            <p>
            ehao@berkeley.edu
            </p>
            </div>

            <h2 className="sub-header"> Phone Number </h2>
              <div className="text-item">
              <p>
              240 - 644 - 3738
              </p>
              </div>
          </div>
          
          
      </div>



    </div>



  // // <div className="App">
  // //   <header className="App-header">
  // //     <img src={logo} className="App-logo" alt="logo" />
  // //     <p>
  // //       Edit <code>src/App.js</code> and save to reload.
  // //     </p>
  // //     <a
  // //       className="App-link"
  // //       href="https://reactjs.org"
  // //       target="_blank"
  // //       rel="noopener noreferrer"
  // //     >
  // //       Learn React
  // //     </a>
  // //   </header>
  // // </div> 
  // );
  );
}

export default App;
