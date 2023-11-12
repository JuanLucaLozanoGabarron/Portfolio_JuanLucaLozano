import React from "react";
import "./style/about.css";
import Header from "../components/Header";
import Follow from "../components/Follow";
import Cv from "./images/cv.png";
import Portrait from "./images/portrait.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  const juan = ["J", "u", "a", "n", "-", "L", "u", "c", "a"];

  const lozano = ["L", "o", "z", "a", "n", "o"];
  return (
    <>
      <Header />
      <Follow />
      <div className="profile">
        <div className="about">
          <div className="name">
            <div class="waviy">
              {juan.map((char, index) => (
                <span key={index} style={{ "--i": index + 1 }}>
                  {char}
                </span>
              ))}
              <br />
              {lozano.map((char, index) => (
                <span key={index} style={{ "--i": index + 1 }}>
                  {char}
                </span>
              ))}
            </div>
          </div>
          <div className="presentation">
            <p>
              Hello, my name is Juan-Luca Lozano and I’m passionate about web
              design, web development and graphic design. My academic background
              in Multimedia & Creative Technology has given me solid skills in
              these areas.
              <br />
              <br />
              I am deeply passionate about digital creation and the art of
              graphic design. My goal is to combine these skills to create
              engaging and aesthetically pleasing online experiences.
              <br />
              <br />
              On this website, I share my projects from my academic years that
              may inspire other web and design enthusiasts. Feel free to contact
              me to discuss projects or collaboration opportunities.
              <br />
              <br />
              Thank you for visiting my site and joining this creative
              community.{" "}
            </p>
          </div>
          <motion.div
            className="cv"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="https://cv-juan-luca.tiiny.site/" target="_blank">
              <img src={Cv} />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="portrait"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
          }}
        >
          <img src={Portrait} />
        </motion.div>
      </div>
    </>
  );
}
