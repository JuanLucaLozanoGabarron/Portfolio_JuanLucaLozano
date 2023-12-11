import React from "react";
import Discover from "../routes/images/discover_project.png";
import "./style/multipharma.css";
import MultipharmaImg from "./images/multipharma.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <Link
          to={
            "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/"
          }
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
    </div>
  );
}
