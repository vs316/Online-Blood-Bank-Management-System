import React from "react";
import "./Footer.css";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="footer-text">
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <p>
          Copyright &copy;
          {new Date().getFullYear()} by BloodSupport | All Rights Reserved.
        </p>
      </div>

      <div className="footer-iconTop">
        <a href="#home" id="scroll-top" onClick={scrollToTop}>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
