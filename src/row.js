import React, { useEffect } from "react";
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
        <span className="row__button__span">Blood Availability Search</span>
        <i></i>
        <i></i>
      </button>
      <button className="row__button">
        <span className="row__button__span">Blood Bank Directory</span>
        <i></i>
        <i></i>
      </button>
      <button className="row__button">
        <span className="row__button__span">Donor Login</span>
        <i></i>
        <i></i>
      </button>
    </div>
  );
}

export default Row;
