import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import SignupScreen from "./SignupScreen";
import ContactScreen from "./ContactScreen";
import BloodBankScreen from "./BloodBankScreen";
import BloodInventory from "./BloodInventoryScreen";
import HospitalScreen from "./HospitalScreen";
import WanttoDonateScreen from "./WanttoDonateScreen";
import NeedBloodScreen from "./NeedBloodScreen";
import NewSignUpScreen from "./NewSignUpScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<SignupScreen />} />
        <Route path="/blood-banks" element={<BloodBankScreen />} />
        <Route path="/blood-inventory" element={<BloodInventory />} />
        <Route path="/hospitals" element={<HospitalScreen />} />
        <Route path="/want-to-donate" element={<WanttoDonateScreen />} />
        <Route path="/need-blood" element={<NeedBloodScreen />} />
        <Route path="./newsignup" element={<NewSignUpScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
