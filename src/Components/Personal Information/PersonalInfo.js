import React from "react";
import Contact from "../Contact Card/Contact";
import About from "../About/About";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

function PersonalInfo() {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{
          minHeight: `calc(100vh - 120px)`,
          overflow: "hidden",
          display: "flex",
          marginTop: "3%"
        }}
      >
        <Grid item xs={12} md={6}>
          <Contact style={{ height: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <About style={{ height: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PersonalInfo;
