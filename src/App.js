import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contactme from "./components/Contactme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ background: "rgb(239, 249, 253)", minHeight: "100vh" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contactme" element={<Contactme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;