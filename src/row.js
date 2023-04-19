import React from "react";
import "./Row.css";

function Row() {
  return (
    <body className="body__row">
      <button
        style={{ "--clr": "rgba(0, 255, 223, 1)" }}
        className="row__button"
      >
        <span>Blood Availability Search</span>
        <i></i>
      </button>
      <button style={{ "--clr": "#FFF01F" }} className="row__button">
        <span>Blood Bank Directory</span>
        <i></i>
      </button>
      <button style={{ "--clr": "#7FFF00" }} className="row__button">
        <span>Donor Login</span>
        <i></i>
      </button>
      <button
        style={{ "--clr": "rgba(0, 255, 223, 1)" }}
        className="row__button"
      >
        <span>Blood Donation Camps</span>
        <i></i>
      </button>
    </body>
  );
}

export default Row;
