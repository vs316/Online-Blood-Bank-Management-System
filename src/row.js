import React from "react";
import "./Row.css";

function Row() {
  return (
    <body className="body__row">
      <button
        style={{ "--clr": "rgba(0, 255, 223, 1)" }}
        className="row__button"
      >
        <span>Button 1</span>
        <i></i>
      </button>
      <button style={{ "--clr": "#FFF01F" }} className="row__button">
        <span>Button 2</span>
        <i></i>
      </button>
      <button style={{ "--clr": "#7FFF00" }} className="row__button">
        <span>Parakh</span>
        <i></i>
      </button>
      <button
        style={{ "--clr": "rgba(0, 255, 223, 1)" }}
        className="row__button"
      >
        <span>Button 4</span>
        <i></i>
      </button>
    </body>
  );
}

export default Row;
