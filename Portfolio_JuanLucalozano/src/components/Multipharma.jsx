import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/multipharma.css";
import MultipharmaImg from "./images/multipharma.png";

export default function Multipharma() {
  return (
    <div id="box">
       <div id="demonstration">
        <img id="MultipharmaImg" src={MultipharmaImg} />
      </div>
      <div id="information">
        <h1>Multipharma</h1>
        <h3>UX / UI Design</h3>
        <p>
          In collaboration with In The Pocket, we had to work as a group to come
          up with alternatives to improve MultiPharma’s mobile application. By
          improving the interface and adding more functionality requested by
          customers as well as pharmacists and doctors, we tried to make life
          easier for consumers.
          <br />
          <br />
          Smooth navigation and accurate information are the guidelines of this
          project.
        </p>
        <img src={Discover} />
      </div>
     
    </div>
  );
}
