import React from "react";
import "./ContactScreen.css";
import Nav from "./Nav";

function ContactScreen() {
  return (
    <div className="contactScreen">
      <Nav />
      <section className="contact" id="contact">
        <h2 className="heading">Contact Us</h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
}

export default ContactScreen;
