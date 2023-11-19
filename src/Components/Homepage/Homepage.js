import { Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import desktop from "../../Images/laptop.png";

function Homepage() {
  const words = [
    "Software Developer",
    "Blockchain Enthusiast",
    "Full Stack Web Developer",
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [direction, setDirection] = useState(1);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timer;
    if (direction === 1) {
      timer = setTimeout(() => {
        setCurrentText(words[currentWord].substring(0, currentText.length + 1));
      }, 150); // Typing speed

      if (currentText === words[currentWord]) {
        setTimeout(() => {
          setDirection(-1);
        }, 1000); // Pause before deleting
      }
    } else if (direction === -1) {
      timer = setTimeout(() => {
        setCurrentText(words[currentWord].substring(0, currentText.length - 1));
      }, 50); // Deleting speed

      if (currentText === "" && direction === -1) {
        setTimeout(() => {
          setDirection(1);
          setCurrentWord((currentWord + 1) % words.length);
        }, 1000); // Pause before typing next word
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, currentWord, direction, words]);

  // Toggling cursor visibility every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={10}
      sx={{
        height: "100vh", // Take the full viewport height
        overflow: "hidden", // Remove vertical scroll
      }}
    >
      <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
        <Typography color="white" variant="h3" fontFamily="Raleway">
          Hi There!
        </Typography>
        <Typography color="white" variant="h3" fontFamily="Raleway">
          I'M KANISHK SHARMA
        </Typography>
        <Typography color="white" fontSize="1.5rem" fontFamily="Raleway">
          {currentText}
          <span style={{ visibility: showCursor ? "visible" : "hidden" }}>
            |
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style= {{ width: '80%' }}>
          <img style={{ width: "100%" }} src={desktop} alt="Desktop" />
        </div>
      </Grid>
    </Grid>
  );
}

export default Homepage;
