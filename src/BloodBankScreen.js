import React from "react";
import "./BloodBankScreen.css";
import Nav from "./Nav";
function BloodBankScreen() {
  return (
    <div>
      <Nav />
      <div className="BloodBank__content">
        <h2 className="BloodBankTable__description">
          BlOOD BANKS NEAR GUDUVANCHERY
        </h2>
        <table className="BloodBank__table">
          <thead className="BloodBanktable__heading">
            <tr>
              <th className="thead">S.NO.</th>
              <th className="thead">BloodBank Name</th>
              <th className="thead">Location</th>
            </tr>
          </thead>
          <tbody className="BloodBank__tablebody">
            <tr>
              <td className="BloodBank__Sno">1</td>
              <td className="BloodBank__Name">SRM Blood Bank</td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir/13.018976,80.1864929/R2FX%2B8GQ+SRM+Blood+Bank,+SRM+Nagar,+Tamil+Nadu+603203/@12.9208863,80.0550446,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52f792e875cbdb:0x91d1d6fdeab519d!2m2!1d80.048853!2d12.8233403"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
            <tr>
              <td className="BloodBank__Sno">2</td>
              <td className="BloodBank__Name">Hindu Mission Blood Bank</td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Hindu+Mission+Hospital+Blood+Bank,+103,+Grand+Southern+Trunk+Rd,+Patel+Nagar,+Tambaram,+Chennai,+Tamil+Nadu+600045/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525f0c5c0eb16b:0xbae8b445989befb5?sa=X&ved=2ahUKEwjz5_nz9sf-AhV2V2wGHb73B9gQ48ADegQIGBAK"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
            <tr>
              <td className="BloodBank__Sno">3</td>
              <td className="BloodBank__Name">
                Government Tambaram Blood Bank
              </td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Government+Hospital+Tambaram+Blood+Bank/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525fa8d6679a89:0x33071c53fb84dc6?sa=X&ved=2ahUKEwjz5_nz9sf-AhV2V2wGHb73B9gQ48ADegQIFhAK"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>
            <tr>
              <td className="BloodBank__Sno">4</td>
              <td className="BloodBank__Name">
                Sree Balaji General Blood Bank
              </td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Sree+Balaji+General+Hospital+Blood+Bank/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525fb22ea2e777:0x2a0fc0aeaa9a5f1c?sa=X&ved=2ahUKEwjz5_nz9sf-AhV2V2wGHb73B9gQ48ADegQIFRAJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>

            <tr>
              <td className="BloodBank__Sno">5</td>
              <td className="BloodBank__Name">
                Athma Blood Centre (ABC) - Blood Bank
              </td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//Athma+Blood+Centre+(ABC)+-+Blood+Bank,+Athma+Blood+Centre+(ABC),+Sugam+Hospital,+First+Floor,+107A,+Grand+Southern+Trunk+Rd,+Chromepet,+Chennai,+Tamil+Nadu+600044/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525fc0fae842f9:0xad72ebadb6a11107?sa=X&ved=2ahUKEwjz5_nz9sf-AhV2V2wGHb73B9gQ48ADegQIFBAK"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>

            <tr>
              <td className="BloodBank__Sno">6</td>
              <td className="BloodBank__Name">CMCH BLOOD BANK</td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//MXHJ%2B22Q+CMCH+BLOOD+BANK,+Kamarajar+Nagar,+Chengalpattu,+Tamil+Nadu+603001/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a52fc4417811439:0x1f2cba5227a4980?sa=X&ved=2ahUKEwjz5_nz9sf-AhV2V2wGHb73B9gQ48ADegQIERAF"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>

            <tr>
              <td className="BloodBank__Sno">7</td>
              <td className="BloodBank__Name">ANNAI TERESA BLOOD BANK</td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir//ANNAI+TERESA+BLOOD+BANK,+Bus+stop,+946+1+st+Floor,+Bazaar+Main+Rd,+Srinivasa+Nagar,+Ram+Nagar+South,+Madipakkam,+Chennai,+Tamil+Nadu+600091/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a525dc1d51eef6d:0x5bbb484baad7a3a3?sa=X&ved=2ahUKEwjz5_nz9sf-AhV2V2wGHb73B9gQ48ADegQIDhAN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Location Link
                </a>
              </td>
            </tr>

            <tr>
              <td className="BloodBank__Sno">8</td>
              <td className="BloodBank__Name">AJK BLOOD BANK</td>
              <td className="BloodBank__Link">
                <a
                  className="bb__link"
                  href="https://www.google.com/maps/dir/13.018976,80.1864929/244X%2BRFW+AJK+BLOOD+BANK,+Yamuna+St,+Kolapakkam,+Chennai,+Tamil+Nadu+600116/@13.0199576,80.1298218,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5261ad7b534b41:0x85c9a52d4fe16070!2m2!1d80.1486932!2d13.0071084"
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

export default BloodBankScreen;
