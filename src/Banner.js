import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/banner%201.jpeg?alt=media&token=891d636c-5cd3-465c-a29a-b6db98289ab2",
    "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/banner2.jpg?alt=media&token=ac01e1a2-0008-4642-93c5-4d3d3a9331a9",
    "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/Blood-Banks-by-state-March-2018.png?alt=media&token=3eb7eb4b-ed1d-4b79-9e7b-24c681c05557",
  ];

  function getRandomImageIndex() {
    return Math.floor(Math.random() * imageUrls.length);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = getRandomImageIndex();
      setCurrentImageIndex(randomIndex);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner">
      <div className="left-container">
        {/* Add your features container here */}
      </div>
      <div className="right-container">
        <img src={imageUrls[currentImageIndex]} alt="" />
      </div>
    </div>
  );
}

export default Banner;
