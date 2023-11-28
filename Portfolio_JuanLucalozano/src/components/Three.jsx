import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/three.css";
import Hotdog from "./images/hotdog3D.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Three() {
  return (
    <div className="box">
      <div className="informationThree">
        <h1>Realiz3D</h1>
        <h3>Development & 3D</h3>
        <p>
          For an Expert Lab project, we had to learn new technologies. I chose
          to learn how to work with React Drei and React Three Fiber.
          <br />
          <br />
          You can view and move 3D elements. What you see is a small glimpse of
          what is possible with React Three Fiber.
          <br />
          <br />
        </p>
        <p>
          Want to see my methodology?{" "}
          <Link
            to={"https://github.com/JuanLucaLozanoGabarron/Exercise-1_three.js"}
            target="_blank"
          >
            Click here{" "}
          </Link>
        </p>
        <Link to={""} target="_blank">
          <motion.div
            className="discoverPorject"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={Discover} />
          </motion.div>
        </Link>
      </div>
      <div className="demonstrationThree">
        <img src={Hotdog} />
      </div>
    </div>
  );
}
