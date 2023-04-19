import React from "react";
import "./button.css";

function button() {
  let btn = document.querySelector("a");
  btn.addEventListener("mousemove", (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 3 - rect.left;
    btn.style.setProperty("--x", x + "deg");
  });
  return (
    <a href="#">
      <i></i>
      <i></i>
      <span>Button</span>
    </a>
  );
}

export default button;
