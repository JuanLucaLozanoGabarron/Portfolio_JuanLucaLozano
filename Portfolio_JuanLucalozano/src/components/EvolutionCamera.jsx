import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/evolutionCamera.css";
import Camera from "./images/camera.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <Link
          to={"https://wikiwall-2023.onrender.com/project/evolution_of_camera"}
          target="_blank"
        >
          <motion.div
            className="discoverPorject"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={Discover} />
          </motion.div>
        </Link>
      </div>
      <div className="demonstrationEvolution">
        <img src={Camera} />
      </div>
    </div>
  );
}
