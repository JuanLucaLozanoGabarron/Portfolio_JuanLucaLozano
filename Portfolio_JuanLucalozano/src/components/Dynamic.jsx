import React from "react";
import "./style/dynamic.css";
import Portfolio from "./images/portfolio.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dynamic() {
  return (
    <div id="box">
      <div id="demonstrationDynamic">
        <img src={Portfolio} />
      </div>
      <div id="informationDynamic">
        <h1>Dynamic Transition</h1>
        <h3>Web Design & Development</h3>
        <p>
          For an Expert Lab project, I had to render a dynamic by adding
          animations. So I chose to do it directly on the portfolio you're
          visiting. Every page, button, text or image was animated.
          <br />
          <br />
          To discover the animations, I'll let you browse my portfolio. <br />
          <br />
          Enjoy your viewing!
        </p>
      </div>
    </div>
  );
}
