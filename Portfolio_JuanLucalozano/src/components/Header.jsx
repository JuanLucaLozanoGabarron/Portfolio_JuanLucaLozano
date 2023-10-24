import React, { useState } from "react";
import "./style/header.css";
import Logo from "./images/logo.png";
import Arrow from "./images/arrow_right.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={Logo} />
          </div>
        </Link>

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
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/my_projects">
                    <a href="#">My Projects</a>
                  </Link>
                </li>
                <li>
                  <Link to="/about_me">
                    <a href="#">About Me</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact_me">
                    <a href="#">Contact Me</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="navigation">
          <div className="projects">
            <Link to="/my_projects">
              <div className="text">
                <p>My Projects</p>
              </div>
            </Link>
            <div className="image">
              <img src={Arrow} />
            </div>
          </div>
          <div className="aboutMe">
            <Link to="/about_me">
              <div className="text">
                <p>About Me</p>
              </div>
            </Link>
            <div className="image">
              <img src={Arrow} />
            </div>
          </div>
          <div className="contact">
            <Link to="/contact_me">
              <div className="text">
                <p>Contact Me</p>
              </div>
            </Link>
            <div className="image">
              <img src={Arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
