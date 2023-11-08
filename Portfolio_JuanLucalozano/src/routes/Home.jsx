import React, { useRef, useState } from "react";
import "../App.css";
import "./style/home.css";
import Header from "../components/Header";
import Follow from "../components/Follow";
import Discover from "../components/Discover";
import GoUp from "./images/go_up.png";
import Me from "./images/me.jpg";
import DiscoverProject from "./images/discover_project.png";
import { Link } from "react-router-dom";
import Video from "./images/JL.mp4";
export default function Home() {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <>
      {showVideo ? (
        <div className="videoContainer">
          <video
            onEnded={() => {
              setShowVideo(false);
            }}
            muted
            autoPlay
            preload="none"
            playsInlinev
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          {" "}
          <Header />
          <Follow />
          <div className="homepage">
            <div className="info">
              <p id="type">A WEB DESIGNER</p>
              <h1>
                Juan-Luca <br />
                Lozano
              </h1>
              <p id="info">
                I’m currently a student in Multimedia & Creative Technology.{" "}
                <br />
                use this website as my portfolio. You will have the opportunity{" "}
                <br />
                to get to know me and discover my most beautiful projects.
              </p>
              <Link to="/my_projects">
                <img src={DiscoverProject} />
              </Link>
            </div>
            <div className="me">
              <img src={Me} />
            </div>
          </div>
          <Discover />
          <div className="goUp">
            <img src={GoUp} />
          </div>
        </>
      )}
    </>
  );
}
