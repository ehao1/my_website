import React from 'react';
import './App.css';

//though called ProjFunc, it just generates the text box :)
export default function AboutFunc({ info }) {
  return (
    <div className="text-item">
    <p>{info.par1}</p>
    <p>{info.par2}</p>
    </div>
  );
}