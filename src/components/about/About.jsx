import React from "react";
import "./about.scss";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>The Team</h1>
      <div className="container">
        <div className="item">
          <img src="assets/me.png" alt="" />
          <div className="text">
            <h2>Shubhranshu Shivam</h2>
            <h3>
              <WorkIcon className="icon" /> Web Developer
            </h3>
            <h3>
              <EmailIcon className="icon" /> shubhranshushivam@gmail.com
            </h3>
                <div className="profile">
                <a href="https://www.linkedin.com/in/shubhranshushivam/" target='blank'>
                <LinkedInIcon className="profileIcon" />
              </a>
              <a href="https://github.com/shubhranshushivam" target='blank'>
                <GitHubIcon className="profileIcon" />
              </a>
                </div>
          </div>
        </div>
        <div className="item">
          <img src="assets/annesha.png" alt="" />
          <div className="text">
            <h2>Annesha Sengupta</h2>
            <h3>
              <WorkIcon className="icon" /> Web Developer
            </h3>
            <h3>
              <EmailIcon className="icon" /> 121910305016@gitam.in
            </h3>
            <div className="profile">
                <a href="https://www.linkedin.com/in/annesha-sengupta-85a274208" target='blank'>
                <LinkedInIcon className="profileIcon" />
              </a>
              <a href="https://github.com/AnneshaSengupta" target='blank'>
                <GitHubIcon className="profileIcon" />
              </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
