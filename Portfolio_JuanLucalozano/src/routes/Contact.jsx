import React from "react";
import "./style/contact.css";
import Header from "../components/Header.jsx";
import Follow from "../components/Follow.jsx";
import HandByHand from "./images/contact.png";

export default function Contact() {
  return (
    <div>
      <Header />
      <Follow />
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <div className="formContact">
        <div className="form">
          <form>
            <input
              className="formInput"
              id="name"
              type="text"
              placeholder="Your name"
            />
            <input
              className="formInput"
              id="mail"
              type="text"
              placeholder="Email address"
            />
            <input
              className="formInput"
              id="phone"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="formInput"
              id="message"
              type="text"
              placeholder="Message "
            />
            <button>
              <p>Submit</p>
            </button>
          </form>
        </div>
        <div className="handByHand">
          <img src={HandByHand} />
        </div>
      </div>
    </div>
  );
}
