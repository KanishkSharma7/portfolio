import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid, CssBaseline } from "@mui/material";
import Contact from "./Components/Contact Card/Contact";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import WorkSample from "./Components/WorkSample/Worksample";
import Acadprojs from "./Components/AcadProjs/Acadprojs";
import Navbar from "./Components/Navbar/Navbar";
import PersonalInfo from "./Components/Personal Information/PersonalInfo";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 75; // Adjust the offset as needed
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<PersonalInfo />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/worksample" element={<WorkSample />} />
          <Route path="/academicprojects" element={<Acadprojs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
