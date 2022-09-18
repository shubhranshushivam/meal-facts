import React from "react";
import "./navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"Navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home">
            <img src="../../assets/logo.png" alt="Meal facts" />
            meal facts
          </a>
        </div>

        <div className="center"></div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
