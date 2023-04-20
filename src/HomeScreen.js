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
        src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/Awesome%20Red%20and%20Black%20iPhone%20Wallpapers%20-%20WallpaperAccess.jpg?alt=media&token=e3caf4bc-2637-42b7-8bb9-191866479fc7
        "
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
