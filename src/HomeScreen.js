import React, { useEffect } from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./row";
import Footer from "./Footer";

function HomeScreen() {
  // Get the icon element by its ID
  useEffect(() => {
    const icon = document.querySelector("#scroll-top");

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    icon.addEventListener("click", handleClick);

    return () => {
      icon.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="homeScreen">
      <img
        className="home-img"
        src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/counter-bg.png?alt=media&token=92cdf5be-1064-4736-98fb-ce69ecc18227"
        alt="background"
      />
      <Nav />
      <Banner />
      <Row />
      <Footer />
    </div>
  );
}

export default HomeScreen;
