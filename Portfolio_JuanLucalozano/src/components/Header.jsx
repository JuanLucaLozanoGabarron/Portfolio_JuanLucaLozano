import React, { useState } from "react";
import "./style/header.css";
import Logo from "./images/logo.png";
import Arrow from "./images/arrow_right.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} />
        </div>

        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {isOpen && (
            <div className="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">My Projects</a>
                </li>
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Contact Me</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="navigation">
          <div className="projects">
            <div className="text">
              <p>My Projects</p>
            </div>
            <div className="image">
              <img src={Arrow} />
            </div>
          </div>
          <div className="aboutMe">
            <div className="text">
              <p>About Me</p>
            </div>
            <div className="image">
              <img src={Arrow} />
            </div>
          </div>
          <div className="contact">
            <div className="text">
              <p>Contact Me</p>
            </div>
            <div className="image">
              <img src={Arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



