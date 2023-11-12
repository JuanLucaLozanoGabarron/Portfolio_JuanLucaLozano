import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import "./style/home.css";
import Header from "../components/Header";
import Follow from "../components/Follow";
import Discover from "../components/Discover";
import GoUp from "./images/go_up.png";
import Me from "./images/me.jpg";
import DiscoverProject from "./images/discover_project.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../components/images/logo.png";

export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showLoader, setshowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {showLoader ? (
        <div className="background">
          <div className="loader">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
            >
              <img src={Icon} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.3,
              }}
            >
              <p>Web designer</p>
            </motion.div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Header />
            <Follow />
            <div className="homepage">
              <div className="info">
                <p id="type">A WEB DESIGNER</p>
                <h1>
                  Juan-Luca <br />
                  Lozano
                </h1>
                <p id="info">
                  I’m currently a student in Multimedia & Creative Technology.{" "}
                  <br />
                  use this website as my portfolio. You will have the
                  opportunity <br />
                  to get to know me and discover my most beautiful projects.
                </p>
                <Link to="/my_projects">
                  <motion.div
                    className="discoverPorject"
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <img src={DiscoverProject} />
                  </motion.div>
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0, x: "200px" }}
                whileInView={{ opacity: 1, x: "1px" }}
                transition={{
                  duration: 0.7,
                }}
                className="me"
              >
                <img src={Me} />
              </motion.div>
            </div>

            <Discover />

            <div className="goUp">
              <motion.div
                className="goUpButton"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.8 }}
              >
                <img onClick={handleClick} src={GoUp} />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
