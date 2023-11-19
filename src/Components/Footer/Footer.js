import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        padding: "10px",
        marginTop: "0.8%",
      }}
    >
      <Typography variant="body1" fontFamily="Raleway">
        Designed and Developed by Kanishk Sharma
      </Typography>
      <Typography variant="body2" fontFamily="Raleway">Copyright 2023 KS</Typography>
    </footer>
  );
};

export default Footer;