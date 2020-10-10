import React from 'react';
import './App.css';

export default function ProjFunc({ info }) {
  return (
    <div>
        <h2 className="sub-header"> {info.ProjectName}</h2>
        <div className="text-item">
        <p>{info.ProjectDescription}</p>
        </div>
        <br></br>
    </div>
  );
}