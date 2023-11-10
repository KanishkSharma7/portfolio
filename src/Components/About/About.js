import { Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function About() {
  const buttonStyles = {
    border: "2px solid white",
    transition: "background-color 0.3s, color 0.3s",
    display: "flex",
    alignItems: "center",
  };

  const downloadButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#2c3e50",
    color: "white",
    marginRight: "5%",
    ":hover": {
      backgroundColor: "white",
      color: "black",
    },
  };

  const resumePdfUrl = "./Resume.pdf"; // Replace with the actual path

  const openResume = () => {
    window.open(resumePdfUrl, "_blank");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "Kanishk_Sharma_Resume.pdf";
    link.click();
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#2c3e50",
          border: "3px solid white",
          borderRadius: "20px",
          marginTop: "5.5%",
          padding: "5%",
        }}
      >
        <Typography color="white" variant="h4" marginBottom="2.5%">
          About Me
        </Typography>
        <Typography variant="body1" color="white">
          Greetings! I'm Kanishk Sharma, a passionate software developer
          currently pursuing a Master's in Computer Science from Arizona State University. With a fervor for
          blockchains, digital forensics, and web3 development, I am dedicated
          to honing my skills in software development. My diverse expertise
          includes programming languages such as Python, C++, JavaScript, and
          Solidity, along with proficiency in web development technologies like
          React JS, Express JS, Node JS, and Django. Diving into databases such
          as MySQL, NoSQL, and MongoDB, I'm well-versed in tools like Git, AWS,
          VScode, Figma, Adobe XD, and Linux. Professional experiences have
          fine-tuned my abilities, particularly in web and e-commerce
          development, as well as successful ventures into crafting NFT
          marketplaces using Solidity. Connect with me on LinkedIn or explore my
          GitHub to delve deeper into my technical journey. Thank you for
          visiting, and I'm eager to connect with you!
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: "#2c3e50",
          border: "3px solid white",
          borderRadius: "20px",
          marginTop: "5.5%",
          padding: "3.8%",
        }}
      >
        <Typography color="white" variant="h5" marginBottom="4%">
          My Resume
        </Typography>
        <div style={{ display: "flex" }}>
          <Button
            size="small"
            sx={downloadButtonStyles}
            onClick={openResume}
            className="downloadbutton"
          >
            <VisibilityOutlinedIcon style={{ marginRight: "8px" }} />
            <Typography>View Resume</Typography>
          </Button>
          <Button
            size="small"
            sx={downloadButtonStyles}
            onClick={downloadResume}
            className="downloadbutton"
          >
            <DownloadOutlinedIcon style={{ marginRight: "8px" }} />
            <Typography>Download Resume</Typography>
          </Button>
        </div>
      </div>
    </>
  );
}

export default About;
