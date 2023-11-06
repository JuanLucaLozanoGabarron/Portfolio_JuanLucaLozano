import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/evolution.css";
import HomeWear from "./images/3.png";
import TopicWear from "./images/4.png";

export default function Evolution() {
  return (
    <div className="box">
      <div className="information">
        <h1>Evolution of the Camera</h1>
        <h3>Web Design & Development</h3>
        <p>
          As a fashion enthusiast, I decided to combine my passion for web
          design and fashion by creating a lookbook website.
          <br />
          <br />
          Let me explain:
          <br />
          Wear the best is an online catalogue where you can create lookbooks
          for specific events. You can select items and placethem in the
          lookbook of your choice. Lots of headaches in front of your wardrobe
          in the morning? Wear the best is the solution for you!
        </p>
        <img src={Discover} />
      </div>
      <div className="demostration">
        <img id="HomeEvolution" src={HomeEvolution} />
        <img id="Topic1Evolution" src={Topic1Evolution} />
        <img id="Topic2Evolution" src={Topic2Evolution} />
      </div>
    </div>
  );
}
