import React, { useState, useEffect } from "react";
import "./HospitalScreen.css";
import Nav from "./Nav";

function HospitalScreen() {
  /*const [hospitals, setHospitals] = useState([]);

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
  }, []); */

  return (
    <div>
      <Nav />
      <div className="content">
        <h2 className="Table__description">HOSPITALS NEAR GUDUVENCHERY</h2>
        <table className="Hospital__table">
          <thead className="table__heading">
            <tr>
              <th className="thead">S.NO.</th>
              <th className="thead">Hospital Name</th>
              <th className="thead">Location</th>
            </tr>
          </thead>
          <tbody className="Hospital__tablebody">
            <tr>
              <td className="Hospital__Sno">1</td>
              <td className="Hospital__Name">SRM Global Hospital</td>
              <td className="Hospital__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir/13.018976,80.1864929/SRM+General+Hospital,+Mahatma+Gandhi+Rd,+Potheri,+SRM+Nagar,+Village+District,+Kattankulathur,+Tamil+Nadu+603203/@12.9208863,80.0550446,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52f70b53105bc7:0xc5d8b72fb4218091!2m2!1d80.0479642!2d12.8229418"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
            <tr>
              <td className="Hospital__Sno">2</td>
              <td className="Hospital__Name">K.R. Hospital</td>
              <td className="Hospital__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//K.R.+Hospital,+174,+Grand+Southern+Trunk+Rd,+N.G.O+Colony,+Guduvancheri,+Tamil+Nadu+603202/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f7abbf86d6b5:0x590aa9df1d3029a6?sa=X&ved=2ahUKEwjLpOrR6sf-AhUtS2wGHdWFAZcQ48ADegQIBRAN "
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
            <tr>
              <td className="Hospital__Sno">3</td>
              <td className="Hospital__Name">Thangam Hospital</td>
              <td className="Hospital__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Thangam+Hospital,+138,+Grand+Southern+Trunk+Rd,+Guduvancheri,+Tamil+Nadu+603202/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f7a984a515e3:0x95b8a10fdb66c180?sa=X&ved=2ahUKEwjTxaeu7Mf-AhUBG4gKHaxRBFgQ48ADegQIEhAL"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
            <tr>
              <td className="Hospital__Sno">4</td>
              <td className="Hospital__Name">Arokia Annai Hospital</td>
              <td className="Hospital__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//V22W%2B83M+Arokia+Annai+Hospital,+Saraswathi+Nagar,+Vallalar+Nagar,+Kutthanur,+Tamil+Nadu+603202/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f6fc6255d739:0xd74b11a5e3678a0e?sa=X&ved=2ahUKEwjTxaeu7Mf-AhUBG4gKHaxRBFgQ48ADegQIDRAI"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>

            <tr>
              <td className="Hospital__Sno">5</td>
              <td className="Hospital__Name">Deepam Hospital</td>
              <td className="Hospital__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Deepam+Hospital,+Guduvancheri,+Tamil+Nadu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f767e6ace869:0xa2cae5e52390d4bf?sa=X&ved=2ahUKEwjTxaeu7Mf-AhUBG4gKHaxRBFgQ48ADegQIAxAN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>

            <tr>
              <td className="Hospital__Sno">6</td>
              <td className="Hospital__Name">Velicham Hospitals</td>
              <td className="Hospital__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Velicham+Hospitals,+NO:+284+Thiruvallur+Nagar,+Aadhanur,+near+Sai+baba+kovil,+Guduvancheri,+Tamil+Nadu+603202/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52f7a3d85a6bf5:0xafea6562dd9236d6?sa=X&ved=2ahUKEwjTxaeu7Mf-AhUBG4gKHaxRBFgQ48ADegQIBRAN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HospitalScreen;
