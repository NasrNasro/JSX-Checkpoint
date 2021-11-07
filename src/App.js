
import './App.css';
import img from './imageInSrc.jfif';
import React from 'react';
import "./styles.css";

function App() {
  return (
    <React.Fragment>
    <div style={{ border : "solid 1px black", maxWidth : "100vw" }}>
      <h1 className = 'title-red'>Nassreddine Hnana</h1>
      <br/>
      <img src = {img} alt = "gi" />
      <br/>
      <img src = "/imageInPublic.jfif" alt = "gi" />
    </div>
    <video width="320" height="240" controls>
    <source src="myVideo.mp4" type="video/mp4" />
    </video>
    </React.Fragment>
  );
}

export default App;
