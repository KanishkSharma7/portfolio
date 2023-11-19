import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const iconStyle = {
    fontSize: "2rem",
    color: "white",
    margin: "0 10px",
    transition: "color 0.3s ease",
  };

  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        padding: "0% 1%",
        marginTop: "5%",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" fontFamily="Raleway" fontSize="1.2rem">
            Designed and Developed by Kanishk Sharma
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="body2" fontFamily="Raleway" fontSize="1.2rem">
              Copyright ©
            </Typography>
            <Typography variant="body2" fontFamily="Raleway" fontSize="1.2rem">
              2023 KS
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container justifyContent="flex-end" alignItems="center">
            <IconButton
              onClick={() =>
                handleIconClick("https://github.com/KanishkSharma7")
              }
              onMouseEnter={(e) => (e.target.style.color = "#333")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <GitHubIcon style={iconStyle} />
            </IconButton>
            <IconButton
              onClick={() =>
                handleIconClick("https://www.linkedin.com/in/kanishk-sharma7")
              }
              onMouseEnter={(e) => (e.target.style.color = "#0077b5")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <LinkedInIcon style={iconStyle} />
            </IconButton>
            <IconButton
              onClick={() => handleIconClick("https://wa.me/6236985877")}
              onMouseEnter={(e) => (e.target.style.color = "#25D366")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <WhatsAppIcon style={iconStyle} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
