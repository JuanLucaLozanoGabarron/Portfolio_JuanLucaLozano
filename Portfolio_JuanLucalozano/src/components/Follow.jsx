import React from "react";
import "./style/follow.css";
import Insta from "./images/insta.png";
import LinkedIn from "./images/linkedIn.png";

export default function Follow() {
  return (
    <div className="follow">
      <img src={LinkedIn} />
      <img src={Insta} />
      <p>
        Follow Me <br />
      </p>
      <div className="stroke"></div>
    </div>
  );
}
