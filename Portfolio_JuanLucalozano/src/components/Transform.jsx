import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/2d.css";
import Transform2D from "./images/2D.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Transform() {
  return (
    <div className="box">
      <div className="information2D">
        <h1>2D to 3D</h1>
        <h3>Development</h3>
        <p>
          For an Expert Lab project, I had to find a way of rendering a 2D image
          in 3D. To do this, I tried to dynamize the image using CSS.
          <br />
          <br />
          Using keyframes, I was able to make the image dynamic and make the
          landscape move.
        </p>
        <p>
          Want to see my methodology?{" "}
          <Link
            to={"https://github.com/JuanLucaLozanoGabarron/2d-to-3d"}
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
      <div className="demonstration2D">
        <img src={Transform2D} />
      </div>
    </div>
  );
}
