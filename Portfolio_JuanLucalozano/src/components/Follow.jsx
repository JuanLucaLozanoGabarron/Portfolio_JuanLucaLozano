import React from "react";
import "./style/follow.css";
import Insta from "./images/insta.png";
import LinkedIn from "./images/linkedIn.png";
import { Link } from "react-router-dom";

export default function Follow() {
  return (
    <div className="follow">
      <Link
        to={"https://www.linkedin.com/in/juan-luca-lozano-gabarron-37a398235/"}
        target="_blank"
      >
        <img src={LinkedIn} />
      </Link>
      <Link
        to={"https://www.instagram.com/lj_design.official/?hl=fr"}
        target="_blank"
      >
        <img src={Insta} />
      </Link>

      <p>
        Follow Me <br />
      </p>
      <div className="stroke"></div>
    </div>
  );
}
