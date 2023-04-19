import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-text">
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <p>
          Copyright &copy;
          {new Date().getFullYear()} by BloodSupport | All Rights Reserved.
        </p>
      </div>

      <div class="footer-iconTop">
        <a href="#home" id="scroll-top">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
