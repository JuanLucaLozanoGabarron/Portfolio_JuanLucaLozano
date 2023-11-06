import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/evolutionCamera.css";
import Camera from "./images/camera.png";

export default function EvolutionCamera() {
  return (
    <div className="boxEvolution">
      <div className="informationEvolution">
        <h1>Evolution of Camera</h1>
        <h3>Web Design & Development</h3>
        <p>
          I’ve always been impressed by technological developments and I wanted
          to put the cameras In the spotlight. With parallax effects you scroll
          from one year to the next.
          <br />
          Each period has its own explanation and photo.
          <br />
          Where we see the most evolution are the photos taken by these cameras.
          I wanted to show them in a fun and inspiring way to make them more
          inspiring than the others.
        </p>
        <img src={Discover} />
      </div>
      <div className="demonstrationEvolution">
        <img src={Camera} />
      </div>
    </div>
  );
}
