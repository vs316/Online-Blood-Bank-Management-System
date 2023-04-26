import React, { useState, useEffect } from "react";
import "./HospitalScreen.css";
import Nav from "./Nav";
import axios from "./axios";

function HospitalScreen() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    console.log("Getting user location...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("User location retrieved:", position.coords);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        axios
          .get("facilities/search", {
            params: {
              q: "hospital",
              lat: latitude,
              lon: longitude,
              dist: 10, // distance in kilometers
            },
          })
          .then((response) => {
            console.log("API response received:", response.data);
            setHospitals(response.data);
          })
          .catch((error) => {
            console.log("API error:", error);
          });
      },
      (error) => {
        console.log("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <div>
      <Nav />
      <div>
        <h2>Nearest Hospitals</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital.id}>
                <td>{hospital.name}</td>
                <td>{hospital.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HospitalScreen;
