import React from 'react';
import './App.css';

//though called ProjFunc, it just generates the text box :)
export default function ProjFunc({ info }) {
  return (
    <div>
        <h2 className="sub-header"> {info.name}</h2>
        <div className="text-item">
        <p>{info.description}</p>
        </div>
        <br></br>
    </div>
  );
}