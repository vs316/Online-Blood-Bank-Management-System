import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  //const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__red"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/R.png?alt=media&token=6bc56cf2-c14a-4cab-aaa5-66adee3fecc8"
          alt="BloodSupport Logo"
        />
        <span className="nav__title">BloodSupport</span>
        <a href="#HOME" class="active">
          HOME
        </a>
        <a href="#SEARCH">SERVICES</a>
        <a href="#REQUESTS">REQUESTS</a>
        <a href="#LOGIN">LOGIN</a>
        <a href="#CONTACT">CONTACT</a>
      </div>
    </div>
  );
}

export default Nav;
