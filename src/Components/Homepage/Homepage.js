import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import desktop from "../../Images/desktop.jpeg";

function Homepage() {
  const words = [
    "Blockchain Enthusiast",
    "Software Developer",
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Take the full viewport height
      }}
    >
      <div>
        <Typography color="white" variant="h3" fontFamily="Raleway">
          Hi there! I am Kanishk Sharma
        </Typography>
        <Typography color="white" fontSize="1.5rem" fontFamily="Raleway">
          {currentText}
          <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
        </Typography>
      </div>
      <div>
        <img src={desktop} alt="Desktop" />
      </div>
    </div>
  );
}

export default Homepage;