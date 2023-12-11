import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style/contact.css";
import Header from "../components/Header.jsx";
import Follow from "../components/Follow.jsx";
import HandByHand from "./images/contact.png";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bl20e8s",
        "template_6ohub6b",
        form.current,
        "51a4hwFZLyzWILxKo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Header />
      <Follow />
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <div className="formContact">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="formInput"
              id="name"
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className="formInput"
              id="mail"
              type="email"
              placeholder="Email address"
              name="user_email"
            />
            <input
              className="formInput"
              id="phone"
              type="text"
              placeholder="Phone number"
              name="phone"
            />
            <input
              className="formInput"
              id="message"
              type="text"
              placeholder="Message "
              name="message"
            />
            <motion.button
              type="submit"
              value="Send"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <p>Submit</p>
            </motion.button>
          </form>
        </div>
        <motion.div
          className="handByHand"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
          }}
        >
          <img src={HandByHand} />
        </motion.div>
      </div>
    </div>
  );
}
