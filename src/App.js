import React from 'react';
import logo from './CoFED_logo.png';
import './App.css';


function leftRight(){
  return (
    <div>

      <div class="flex-container">
        <div class = "box">
          <h1>Bruh</h1>
        </div>
      </div>

      <div className="leftRight-container">
          
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

    </div>
  );
}
//things to do
//1) nav bar
//2) background images
//3) organize files
//4) make the fonts and style look better

function App() {
  return (
    <div>

      <div className="intro-box">
        <div className="box">
          <h3>Hey, I'm</h3>
          <h1>Eric Hao</h1>
        </div>
      </div>

      <div className="leftRight-container">
          
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
