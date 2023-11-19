import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", path: "/portfolio" },
    { text: "About Me", path: "/about" },
    { text: "Experience", path: "/experience" },
    { text: "Work Sample", path: "/worksample" },
  ];

  const list = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ backgroundColor: "rgb(27, 27, 52)", width: "100%" }}
    >
      <List>
        {menuItems.map((menuItem) => (
          <ListItem key={menuItem.text} disablePadding>
            <ListItemButton component={RouterLink} to={menuItem.path}>
              <Typography
                variant="button"
                color="white"
                sx={{ textTransform: "capitalize" }}
              >
                {menuItem.text}
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
          sx={{ color: "white", alignSelf: "flex-start" }}
        >
          <MenuIcon />
        </Button>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            padding: "0.05% 0.5%", // Adjust the padding as needed
            boxSizing: "border-box",
          }}
        >
          {menuItems.map((menuItem) => (
            <Button
              key={menuItem.text}
              component={RouterLink}
              to={menuItem.path}
              sx={{
                borderRadius: "20px",
                transition: "box-shadow 0.3s",
                padding: "1%",
                backgroundColor: "rgb(0, 128, 128, 0)", // Fixing the background color
                color: "white",
                ":hover": {
                  boxShadow: "0px 0px 20px 0px white",
                },
              }}
            >
              <Typography
                variant="button"
                sx={{ textTransform: "capitalize" }}
                fontFamily="Raleway"
                fontSize="1.2rem"
              >
                {menuItem.text}
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
