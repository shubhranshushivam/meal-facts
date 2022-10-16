import React from "react";
import "./home.scss";
import Typewriter from 'typewriter-effect';
import videoBg from './video1.mp4';
import videoBg1 from './video1.webm';
import videoBg2 from './video1.ogg';
import posterImg from './pos.jpg'
import vidGif from './vidGif1.gif';
import CameraIcon from '@mui/icons-material/Camera';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Home() {
  var time = new Date().getHours();
  var greeting = 'Good Morning';
  if (time > 12 && time < 18) {
    greeting = 'Good Afternoon';
  }
  if (time > 18 && time < 24) {
    greeting = 'Good Evening';
  }
  return (
    <div className="home" id="home">
      <div className="overlay">
      <video autoPlay loop playsinline muted poster={vidGif}>
        <source src={videoBg} type="video/mp4"/>
        <source src={videoBg1} type="video/webm"/>
        <source src={videoBg2} type="video/ogg"/>
      </video>
      </div>
      <div className="text">
      <div className="content">
            <h2>{greeting}</h2>
            
            <h1>know the   <span><Typewriter start-tag  options={{ 
           strings:["dish name", "calorie", "recipe"],
           autoStart:true,
           delay: 50,
           deleteSpeed: 15,
           loop:true,
           
           }}
           
           /></span></h1>
           <h3>Identify food in seconds using your camera <CameraIcon className="icon"/> </h3>
        </div>
        <a href="#scan">
          <KeyboardArrowDownIcon className="downIcon" />
        </a>
      </div>
      
        
    </div>
  );
}
