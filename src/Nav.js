import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate();
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
        <Link to="/">
          <img
            className="nav__logo"
            src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/R.png?alt=media&token=6bc56cf2-c14a-4cab-aaa5-66adee3fecc8"
            alt="BloodSupport Logo"
          />
          <span className="nav__title">BloodSupport</span>
        </Link>
        <Link to="/" className="active">
          HOME
        </Link>
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
            <Link to="/hospitals">Hospitals</Link>
            <Link to="/blood-banks">Blood Banks</Link>
            <Link to="/blood-inventory">Blood Inventory</Link>
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
            <Link to="/want-to-donate">Want to Donate</Link>
            <Link to="/need-blood">Need Blood</Link>
          </div>
        </div>
        <Link to="/login">LOGIN</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default Nav;
