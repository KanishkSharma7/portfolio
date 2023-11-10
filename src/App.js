import { Container, Grid, CssBaseline } from "@mui/material";
import Contact from "./Components/Contact Card/Contact";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import WorkSample from "./Components/WorkSample/Worksample";
import Acadprojs from "./Components/AcadProjs/Acadprojs";
import Navbar from "./Components/Navbar/Navbar";

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
    <div className="App" style={{ backgroundColor: "rgb(27, 27, 52)" }}>
      <CssBaseline />
      <Navbar scrollToSection={scrollToSection} />

      <Container id="contact" height="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <Contact />
          </Grid>
          <Grid item xs={12} sm={6} md={7} marginBottom="2%">
            <About />
          </Grid>
        </Grid>
      </Container>

      <Container id="experience">
        <Experience />
      </Container>

      <Container id="workSample">
        <WorkSample />
      </Container>

      <Container id="acadProjects">
        <Acadprojs />
      </Container>
    </div>
  );
}

export default App;
