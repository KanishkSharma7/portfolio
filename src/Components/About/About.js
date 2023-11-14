import { Typography } from "@mui/material";
import React from "react";
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
    backgroundColor: "transaparent",
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
          backgroundColor: "transparent",
          border: "3px solid white",
          borderRadius: "20px",
          marginTop: "5.5%",
          padding: "5%",
        }}
      >
        <Typography
          color="white"
          variant="h4"
          marginBottom="2.5%"
          sx={{
            "&.MuiTypography-root": {
              fontSize: "1.8rem", // Default font size for title
              marginBotom: "2.5%",
              "@media (max-width:600px)": {
                fontSize: "1rem", // Adjust font size for smaller screens
              },
            },
          }}
        >
          About Me
        </Typography>
        <Typography variant="body1" color="white">
          Greetings! I'm Kanishk Sharma, a passionate software developer
          currently pursuing a Master's in Computer Science from Arizona State
          University. With a fervor for blockchains, digital forensics, and web3
          development, I am dedicated to honing my skills in software
          development. My diverse expertise includes programming languages such
          as Python, C++, JavaScript, and Solidity, along with proficiency in
          web development technologies like React JS, Express JS, Node JS, and
          Django. Diving into databases such as MySQL, NoSQL, and MongoDB, I'm
          well-versed in tools like Git, AWS, VScode, Figma, Adobe XD, and
          Linux. Professional experiences have fine-tuned my abilities,
          particularly in web and e-commerce development, as well as successful
          ventures into crafting NFT marketplaces using Solidity. Connect with
          me on LinkedIn or explore my GitHub to delve deeper into my technical
          journey. Thank you for visiting, and I'm eager to connect with you!
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: "transparent",
          border: "3px solid white",
          borderRadius: "20px",
          marginTop: "5.5%",
          padding: "3.8%",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          
          
          sx={{
            "&.MuiTypography-root": {
              fontSize: "1.7rem", // Default font size for title
              marginBottom: "2.5%",
              "@media (max-width:600px)": {
                fontSize: "1rem", // Adjust font size for smaller screens
              },
            },
          }}
        >
          My Resume
        </Typography>
        <div style={{ display: "flex" }}>
          <Button
            size="small"
            sx={{
              ...downloadButtonStyles,
              "& .MuiTypography-root": {
                fontSize: "1rem", // Default font size
                "@media (max-width:600px)": {
                  fontSize: "0.7rem", // Adjust font size for smaller screens
                },
              },
            }}
            onClick={openResume}
            className="downloadbutton"
          >
            <VisibilityOutlinedIcon style={{ marginRight: "8px" }} />
            <Typography variant="body1">View Resume</Typography>
          </Button>
          <Button
            size="small"
            sx={{
              ...downloadButtonStyles,
              "& .MuiTypography-root": {
                fontSize: "1rem", // Default font size
                "@media (max-width:600px)": {
                  fontSize: "0.7rem", // Adjust font size for smaller screens
                },
              },
            }}
            onClick={downloadResume}
            className="downloadbutton"
          >
            <DownloadOutlinedIcon style={{ marginRight: "8px" }} />
            <Typography variant="body1">Download Resume</Typography>
          </Button>
        </div>
      </div>
    </>
  );
}

export default About;
