import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import SignupScreen from "./SignupScreen";
import ContactScreen from "./ContactScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
