import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profileimage from "../../Images/Profilephoto.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
    marginRight: "5%",
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

  return (
    <div style={{ marginTop: "7.5%" }}>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "transparent",
          padding: "2%",
          border: "3px solid white",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <img
              src={profileimage}
              style={{
                width: "73%",
                borderRadius: "50%",
                border: "3px solid white",
              }}
              alt="profile pic"
            />
          </div>
          <Typography gutterBottom variant="h5" component="div" color="white" sx={{paddingTop: "7.5%"}}>
            Kanishk Sharma
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "3%"
            }}
          >
            <LocationOnIcon style={{ color: "white", marginRight: "3.5%" }} />
            <Typography gutterBottom variant="h7" component="div" color="white">
              Tempe, AZ, USA
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "3%"
            }}
          >
            <PhoneIcon style={{ color: "white", marginRight: "3.5%" }} />
            <Typography gutterBottom variant="h7" component="div" color="white">
              (623)-698-5877
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <EmailIcon style={{ color: "white", marginRight: "3.5%" }} />
            <Typography gutterBottom variant="h7" component="div" color="white">
              ksharm72@asu.edu
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              // paddingTop: "20%"
            }}
          >
            <Button
              size="small"
              sx={githubButtonStyles}
              onClick={() =>
                window.open("https://github.com/KanishkSharma7", "_blank")
              }
              className="githubbutton"
            >
              <GitHubIcon style={{ marginRight: "8px" }} />
              <Typography>Github</Typography>
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
              className="linkedinbutton"
            >
              <LinkedInIcon style={{ marginRight: "8px" }} />
              <Typography>Linkedin</Typography>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
