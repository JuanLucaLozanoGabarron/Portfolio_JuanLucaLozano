import React from "react";
import "./style/projects.css";
import Header from "../components/Header.jsx";
import Follow from "../components/Follow.jsx";
import WearTheBest from "../components/WearTheBest";
import Multipharma from "../components/Multipharma";
import EvolutionCamera from "../components/EvolutionCamera";

export default function Projects() {
  return (
    <div>
      <Header />
      <Follow />
      <div className="projectList">
        <WearTheBest />
        <hr />
        <Multipharma />
        <hr />
        <EvolutionCamera />
        <hr />
      </div>
    </div>
  );
}
