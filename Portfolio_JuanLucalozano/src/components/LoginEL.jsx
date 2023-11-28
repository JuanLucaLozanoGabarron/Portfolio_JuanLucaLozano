import React from "react";
import "./style/loginEL.css";
import Login from "./images/login.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Discover from "../routes/images/discover_project.png";

export default function LoginEL() {
  return (
    <div id="box">
      <div id="demonstrationLogin">
        <img src={Login} />
      </div>
      <div id="informationLogin">
        <h1>Login System</h1>
        <h3>Web Design & Development</h3>
        <p>
          For an Expert Lab project, I wanted to create a login system that I
          would use in my Final Work.
          <br />
          <br />
          Platform users will be able to create an account and connect to my
          site. With this login, everyone will have a personal page with their
          data.
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
    </div>
  );
}
