import React from "react";
import "./style/discover.css";
import Find from "./images/home.jpeg";
import Categories from "./images/categories.png";

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
        </div>
        <div className="categories">
          <img src={Categories} />
        </div>
      </div>
    </div>
  );
}
