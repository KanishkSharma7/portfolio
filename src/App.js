import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PersonalInfo from "./Components/Personal Information/PersonalInfo";
import Experience from "./Components/Experience/Experience";
import WorkSample from "./Components/WorkSample/Worksample";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <CssBaseline />
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/portfolio" element={<Homepage />} />
            <Route path="/about" element={<PersonalInfo />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/worksample" element={<WorkSample />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;