import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
