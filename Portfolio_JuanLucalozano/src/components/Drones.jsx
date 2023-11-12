import React from "react";
import "./style/drones.css";
import Download from "./images/downloadVideo.png";
import { motion } from "framer-motion";

export default function Drones() {
  return (
    <>
      <h1 id="titleDrones">The therapy of nature</h1>
      <div id="boxDrones">
        <div id="demonstrationDrones">
          <iframe
            id="DronesImg"
            src="https://www.youtube.com/embed/dqbSd1UC7Qk"
          ></iframe>
        </div>
        <div id="informationDrones">
          <h3>Motion</h3>
          <p>
            With my colleague Quentin, we created a video using a drone. The aim
            of the video was to tell a story using a drone. The theme chosen was
            nature and the tranquillity it represents. We tried to show people
            in the city that nature is a place where we can reconnect with
            ourselves without anyone’s help.
          </p>
          <motion.div
            className="discoverPorject"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={Download} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
