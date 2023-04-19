import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";

function HomeScreen() {
  return (
    <div className="homeScreen">
    <img src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/counter-bg.png?alt=media&token=92cdf5be-1064-4736-98fb-ce69ecc18227" />  
    <Nav />

      <Banner />
    </div>
  );
}

export default HomeScreen;
