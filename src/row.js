import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Row.css";

function Row() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".row__button");
    buttons.forEach((button) => {
      button.addEventListener("mousemove", (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX * 3 - rect.left;
        button.style.setProperty("--x", x + "deg");
      });
    });
  }, []);

  return (
    <div className="body__row">
      <button className="row__button">
        <Link to="/blood-inventory">
          <span className="row__button__span">Blood Availability Search</span>
          <i></i>
          <i></i>
        </Link>
      </button>
      <button className="row__button">
        <Link to="/blood-bank">
          <span className="row__button__span">Blood Bank Directory</span>
          <i></i>
          <i></i>
        </Link>
      </button>
      <button className="row__button">
        <Link to="/login">
          <span className="row__button__span">Donor Login</span>
          <i></i>
          <i></i>
        </Link>
      </button>
    </div>
  );
}

export default Row;
