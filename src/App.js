import React from 'react';
// import logo from './images/CoFED_logo.png';
// import rlImage from './images/rl-image.png';
// import Geophysics from './images/Geophysics.png';
import './App.css';
import ProjFunc from './ProjFunc.js';
import axios from 'axios';
import AboutFunc from './AboutFunc';


//do the enviornment key stuff
//integrate images

//update about


function App() {

  const [about, setAbout] = React.useState(null);
  const [projects, setProjects] = React.useState(null);
  const [experinces, setExperinces] = React.useState(null);
  const [contact, setContact] = React.useState(null);
  
  async function fetchData() {
    const responseProject = await axios.get(
      'https://api.airtable.com/v0/appUYJORSDB0bukw7/ProjectList',
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );

    const responseExperince = await axios.get(
      'https://api.airtable.com/v0/appUYJORSDB0bukw7/ExperincesList',
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );

    const responseContact = await axios.get(
      'https://api.airtable.com/v0/appUYJORSDB0bukw7/ContactList',
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );

    const responseAbout = await axios.get(
      'https://api.airtable.com/v0/appUYJORSDB0bukw7/AboutList',
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );

    setAbout(responseAbout.data.records);
    setProjects(responseProject.data.records);
    setExperinces(responseExperince.data.records);
    setContact(responseContact.data.records);

  }

  
  React.useEffect(() => {
    fetchData();
  }, []);
  
  if (!projects || !experinces || !contact || !about) {
    return (
        <div className="intro-page" id="home">
        <div className="intro-box">
          <h3>please wait</h3>
          <h1>loading...</h1>
        </div>
      </div>
    );
  }


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
          <h1 className="header">About</h1>
            {about.map((record) => (
            <AboutFunc key={record.id} info={record.fields} />))
            }
          </div>
      </div>

    {/*Experinces page */}
    <div className="leftRight-container-right" id="experinces">
          
          <div>
          {/* <img src={rlImage} className="image-item" alt="rlImage" />
          <img src={Geophysics} className="image-item" alt="Geophysics" /> */}
          </div>

          <div className="text-container">
          <h1 className="header">Experinces</h1>
          {experinces.map((record) => (
              <ProjFunc key={record.id} info={record.fields} />
            ))}
          </div>
      </div>
    

    {/*Projects page */}
      <div className="leftRight-container-left" id="projects">
          <div className="text-container">
          <h1 className="header">Projects</h1>
          <div>
          {projects.map((record) => (
              <ProjFunc key={record.id} info={record.fields} />
            ))}
          </div>
          </div>
          {/* <img src={logo} className="image-item" alt="logo" /> */}
      </div>


   {/*Contact */}
   <div className="leftRight-container-right" id="contact">

          <div className="text-container-contact">
          <h1 className="header">Contact</h1>
          <div>
          {contact.map((record) => (
              <ProjFunc key={record.id} info={record.fields} />
            ))}
          </div>
          </div>
          
      </div>



    </div>

  );
}

export default App;
