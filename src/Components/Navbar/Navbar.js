import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = ({ scrollToSection }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    "Contact",
    "About",
    "Experience",
    "Work Sample",
    "Academic Projects",
  ];

  const list = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ backgroundColor: "rgb(27, 27, 52)", width: "100%" }}
    >
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() =>
                scrollToSection(text.toLowerCase().replace(/\s/g, ""))
              }
            >
              <Typography
                variant="button"
                color="white"
                sx={{ textTransform: "capitalize" }}
              >
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isSmallScreen ? (
        <Button
          size="large"
          edge="start"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ color: "white" }}
        >
          <MenuIcon />
        </Button>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 10%", // Adjust the padding as needed
          }}
        >
          {menuItems.map((text) => (
            <Button
              key={text}
              onClick={() =>
                scrollToSection(text.toLowerCase().replace(/\s/g, ""))
              }
              sx={{
                borderRadius: "20px",
                transition: "box-shadow 0.3s",
                padding: "1%",
                backgroundColor: "transparent", // Initial background color
                color: "white", // Initial text color
                ":hover": {
                  boxShadow: "0px 0px 20px 0px white",
                },
              }}
            >
              <Typography variant="button" sx={{ textTransform: "capitalize" }}>
                {text}
              </Typography>
            </Button>
          ))}
        </div>
      )}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
};

export default Navbar;
