import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import react_img from "../../Images/react.jpeg";
import node_img from "../../Images/node.jpeg";
import mongo_img from "../../Images/Mongodb.jpeg";
import python_img from "../../Images/python.jpeg";
import javascript_img from "../../Images/jsjs.jpeg";
import c_image from "../../Images/C.jpeg";
import etheruem_img from "../../Images/Ethereum.jpeg";
import github_img from "../../Images/GitHub.jpeg";

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

  const skillsData = [
    {
      name: "MongoDB",
      image: mongo_img,
    },
    {
      name: "React JS",
      image: react_img,
    },
    {
      name: "Node JS",
      image: node_img,
    },
    {
      name: "Python",
      image: python_img,
    },
    {
      name: "JavaScript",
      image: javascript_img,
    },
    {
      name: "C plus",
      image: c_image,
    },
    {
      name: "Ethereum",
      image: etheruem_img,
    },
    {
      name: "Github",
      image: github_img,
    },
    // Add other skills in the same format
  ];

  const resumePdfUrl = "./Resume.pdf";

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
          padding: "5%",
          height: "100%", // Set a fixed height to match Contact component
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          color="white"
          variant="h4"
          marginBottom="2.5%"
          align="center"
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
        <Typography variant="body1" color="white" sx={{ textAlign: "justify" }}>
          Greetings! I'm Kanishk Sharma, a passionate software developer
          currently pursuing a Master's in Computer Science from Arizona State
          University. With a fervor for blockchains, digital forensics, and web3
          development, I am dedicated to honing my skills in software
          development. Professional experiences have fine-tuned my abilities,
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
        <Typography variant="h4" color="white" align="center" gutterBottom>
          Skills
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%"
          }}
        >
          {skillsData.map((skill) => (
            <img
              key={skill.name}
              src={skill.image}
              alt={skill.name}
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
          ))}
        </div>
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
