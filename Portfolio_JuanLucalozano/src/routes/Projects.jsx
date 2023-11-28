import React, { useRef } from "react";
import "./style/projects.css";
import Header from "../components/Header.jsx";
import Follow from "../components/Follow.jsx";
import WearTheBest from "../components/WearTheBest";
import Multipharma from "../components/Multipharma";
import EvolutionCamera from "../components/EvolutionCamera";
import Drones from "../components/Drones";
import GoUp from "./images/go_up.png";
import { motion } from "framer-motion";
import Three from "../components/Three";
import Dynamic from "../components/Dynamic";
import Transform from "../components/Transform";
import LoginEL from "../components/LoginEL";

export default function Projects() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={ref}>
      <Header />
      <Follow />
      <div className="projectList">
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <WearTheBest />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Multipharma />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <EvolutionCamera />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Drones />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Three />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Dynamic />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Transform />
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, x: "200px" }}
          whileInView={{ opacity: 1, x: "1px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <LoginEL />
        </motion.div>

        <div className="goUpProjects">
          <motion.div
            className="goUpButton"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
          >
            <img onClick={handleClick} src={GoUp} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
