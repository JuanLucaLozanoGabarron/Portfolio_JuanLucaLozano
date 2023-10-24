import React from "react";
import "./style/about.css";
import Header from "../components/Header";
import Follow from "../components/Follow";
import Cv from "./images/cv.png";
import Portrait from "./images/portrait.png";

export default function AboutMe() {
  return (
    <>
      <Header />
      <Follow />
      <div className="profile">
        <div className="about">
          <div className="name">
            <h1>
              Juan-Luca
              <br />
              Lozano
            </h1>
          </div>
          <div className="presentation">
            <p>
              Hello, my name is Juan-Luca Lozano and I’m passionate about web
              design, web development and graphic design. My academic background
              in Multimedia & Creative Technology has given me solid skills in
              these areas.
              <br />
              <br />
              I am deeply passionate about digital creation and the art of
              graphic design. My goal is to combine these skills to create
              engaging and aesthetically pleasing online experiences.
              <br />
              <br />
              On this website, I share my projects from my academic years that
              may inspire other web and design enthusiasts. Feel free to contact
              me to discuss projects or collaboration opportunities.
              <br />
              <br />
              Thank you for visiting my site and joining this creative
              community.{" "}
            </p>
          </div>
          <div className="cv">
            <img src={Cv} />
          </div>
        </div>
        <div className="portrait">
          <img src={Portrait} />
        </div>
      </div>
    </>
  );
}
