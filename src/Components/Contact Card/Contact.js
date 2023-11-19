import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profileimage from "../../Images/Profilephoto.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const buttonStyles = {
    border: "2px solid white",
    transition: "background-color 0.3s, color 0.3s",
    display: "flex",
    alignItems: "center",
  };

  const githubButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "white",
    marginRight: "10px",
    ":hover": {
      backgroundColor: "white",
      color: "black",
    },
  };

  const linkedinButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "white",
    ":hover": {
      backgroundColor: "white",
      color: "black",
    },
  };
  const [hover, setHover] = useState(false);

  const sectionStyles = {
    base: {
      backgroundColor: "transparent",
      border: "3px solid white",
      borderRadius: "20px",
      padding: "2%",
      height: "100%", // Set a fixed height to match About component
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 0.3s, box-shadow 0.3s",
      marginTop: "-4%"
    },
    hover: {
      transform: "scale(1.05)",
      boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.5)",
    },
  };

  const applyHover = (isHovering) => {
    setHover(isHovering);
  };
  return (
    <Card
      sx={{
        ...sectionStyles.base,
        ...(hover && sectionStyles.hover), // Apply hover styles conditionally
      }}
      onMouseEnter={() => applyHover(true)}
      onMouseLeave={() => applyHover(false)}
    >
      <CardContent style={{ textAlign: "center" }}>
        <img
          src={profileimage}
          style={{
            width: "70%",
            borderRadius: "50%",
            border: "3px solid white",
            marginBottom: "20px",
            marginTop: "4%"
          }}
          alt="profile pic"
        />
        <div style={{ marginTop: "11%" }}>
          <Typography
            variant="h5"
            color="white"
            gutterBottom
            style={{ textAlign: "left", fontSize: "3.5rem" }}
            fontFamily="Raleway"
            fontWeight="800"
          >
            Kanishk Sharma
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <LocationOnIcon
              style={{
                color: "white",
                marginRight: "10px",
                fontSize: "1.5rem",
              }}
            />
            <Typography
              variant="body1"
              color="white"
              style={{ fontSize: "1.5rem" }}
              fontFamily="Raleway"
            >
              Tempe, AZ, USA
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <PhoneIcon
              style={{
                color: "white",
                marginRight: "10px",
                fontSize: "1.5rem",
              }}
            />
            <Typography
              variant="body1"
              color="white"
              style={{ fontSize: "1.5rem" }}
              fontFamily="Raleway"
            >
              (623)-698-5877
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <EmailIcon
              style={{
                color: "white",
                marginRight: "10px",
                fontSize: "1.5rem",
              }}
            />
            <Typography
              variant="body1"
              color="white"
              style={{ fontSize: "1.5rem" }}
              fontFamily="Raleway"
            >
              ksharm72@asu.edu
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5%",
          }}
        >
          <Button
            size="small"
            sx={githubButtonStyles}
            onClick={() =>
              window.open("https://github.com/KanishkSharma7", "_blank")
            }
          >
            <GitHubIcon style={{ marginRight: "8px" }} />
            <Typography fontFamily="Raleway">Github</Typography>
          </Button>
          <Button
            size="small"
            sx={linkedinButtonStyles}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kanishk-sharma7",
                "_blank"
              )
            }
          >
            <LinkedInIcon style={{ marginRight: "8px" }} />
            <Typography fontFamily="Raleway">Linkedin</Typography>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Contact;
