import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [show, handleShow] = useState(false);
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

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".nav__dropdown");
    dropdowns.forEach((dropdown) => {
      const parent = dropdown.parentElement;
      parent.addEventListener("click", () => {
        dropdown.classList.toggle("active");
      });
    });
  }, []);

  const handleIconHover = (e) => {
    e.currentTarget.style.cursor = "pointer";
  };

  return (
    <div className={`nav ${show && "nav__red"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/R.png?alt=media&token=6bc56cf2-c14a-4cab-aaa5-66adee3fecc8"
          alt="BloodSupport Logo"
        />
        <span className="nav__title">BloodSupport</span>
        <a href="#HOME" className="active">
          HOME
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            SEARCH
            <FontAwesomeIcon
              icon={faAngleDown}
              className="icon"
              onMouseOver={handleIconHover}
            />
          </button>
          <div className="dropdown-content">
            <a href="#hospitals">Hospitals</a>
            <a href="#blood-banks">Blood Banks</a>
            <a href="#blood-inventory">Blood Inventory</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            REQUESTS
            <FontAwesomeIcon
              icon={faAngleDown}
              onMouseOver={handleIconHover}
              className="icon"
            />
          </button>
          <div className="dropdown-content">
            <a href="#want-to-donate">Want to Donate</a>
            <a href="#need-blood">Need Blood</a>
          </div>
        </div>
        <a href="#LOGIN">LOGIN</a>
        <a href="#CONTACT">CONTACT</a>
      </div>
    </div>
  );
}

export default Nav;
