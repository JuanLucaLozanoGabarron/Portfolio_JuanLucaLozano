import React from "react";
import "./style/discover.css";
import Find from "./images/home.jpeg";
import Categories from "./images/categories.png";
import { motion } from "framer-motion";

export default function Discover() {
  return (
    <div className="discover">
      <div className="imageFind">
        <img src={Find} />
      </div>
      <div className="textFind">
        <div className="infoFind">
          <h1>
            What do <br />
            you find
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <p>
              Throughout my academic years, I have carried out several projects
              for my courses.
              <br />
              So there will be 4 types of work that you could find.
              <br />
              <br />
              Each work will be commented by an explanation of project and
              software used to <br />
              realize them.{" "}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="categories"
        >
          <img src={Categories} />
        </motion.div>
      </div>
    </div>
  );
}
