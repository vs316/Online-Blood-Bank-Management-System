import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./Banner.css";

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);
  const imageUrls = useMemo(
    () => [
      "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/download%20(1).jpeg?alt=media&token=529dff4e-07a2-4ce0-8a58-62d3545ac3f7",
      "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/misc-blood-donation-wallpaper-27db8e27d5cbab14e19185f0047b8f61.jpg?alt=media&token=5fcf8d66-28e3-4d74-b16a-a7c2646b131f",
      "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/banner%201.jpeg?alt=media&token=891d636c-5cd3-465c-a29a-b6db98289ab2",
      "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/banner2.jpg?alt=media&token=ac01e1a2-0008-4642-93c5-4d3d3a9331a9",
      "https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/Blood-Banks-by-state-March-2018.png?alt=media&token=3eb7eb4b-ed1d-4b79-9e7b-24c681c05557",
    ],
    []
  );

  const getRandomImageIndex = useCallback(() => {
    return Math.floor(Math.random() * imageUrls.length);
  }, [imageUrls]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = getRandomImageIndex();
      setNextImageIndex(randomIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [getRandomImageIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = getRandomImageIndex();
      setCurrentImageIndex(randomIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [getRandomImageIndex]);
  return (
    <>
      <img
        className="banner-img"
        src="https://firebasestorage.googleapis.com/v0/b/onl-bbms.appspot.com/o/blood-bank%20banner.jpg?alt=media&token=39778b66-7008-4577-a649-ee1e424ae331"
        alt="banner"
      />
      <div className="banner">
        <div className="left-container">
          <h2>Compatible Blood Type Donors</h2>
          <table>
            <thead>
              <tr>
                <th>Blood Type</th>
                <th>Donate Blood To</th>
                <th>Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="blood__type">A+</td>
                <td>A+, AB+</td>
                <td>A+, A-, O+, O-</td>
              </tr>
              <tr>
                <td className="blood__type">O+</td>
                <td>O+, A+, B+, AB+</td>
                <td>O+, O-</td>
              </tr>
              <tr>
                <td className="blood__type">B+</td>
                <td>B+, AB+</td>
                <td>B+, B-, O+, O-</td>
              </tr>
              <tr>
                <td className="blood__type">AB+</td>
                <td>AB+</td>
                <td>EVERYONE</td>
              </tr>
              <tr>
                <td className="blood__type">A-</td>
                <td>A+, A-, AB+, AB-</td>
                <td>A-, O-</td>
              </tr>
              <tr>
                <td className="blood__type">O-</td>
                <td>EVERYONE</td>
                <td>O-</td>
              </tr>
              <tr>
                <td className="blood__type">B-</td>
                <td>B+, B-, AB+, AB-</td>
                <td>B-, O-</td>
              </tr>
              <tr>
                <td className="blood__type">AB-</td>
                <td>AB+, AB-</td>
                <td>AB-, A-, B-, O-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right-container">
          <img
            src={imageUrls[currentImageIndex]}
            alt=""
            className={`banner-img ${
              nextImageIndex !== currentImageIndex ? "transition" : ""
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
