import React from "react";
import "./style/projects.css";
import Header from "../components/Header.jsx";
import Follow from "../components/Follow.jsx";
import WearTheBest from "../components/WearTheBest";

export default function Projects() {
  return (
    <div>
      <Header />
      <Follow />
      <div className="projects">
        <WearTheBest />
      </div>
    </div>
  );
}
