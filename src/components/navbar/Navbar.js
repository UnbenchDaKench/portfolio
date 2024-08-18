import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SocialIcons from "../socialIcons/SocialIcons";
import { JoinFullSharp } from "@mui/icons-material";

const pages = ["Home", "About", "Experience", "Projects", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  useEffect((

  ) => {}, []);
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "primary.main",
        height: "100%",
        color: "secondary.main",
      }}
    >
      
      {pages.map((page) => (
              <Link
                key={page}
                style={{ textDecoration: "none", width: "100%"}}
                to={page === "Home" ? "/" : "/" + page}
              >
                <Button
                  sx={{ my: 2, color: "secondary.main", display: "block", textAlign: "center", width: "100%", fontFamily: "League Spartan", fontWeight: "600" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        className="navbar"
        id="navbar"
        sx={{
          zIndex: "3",
          height: "64px"
        }}
      >
        <Toolbar disableGutters sx={{
          display: "flex",
          justifyContent: "space-between"
        
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open-drawer"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon sx={{ color: "secondary.main" }} />
          </IconButton>

          <Box
            sx={{
              flexGrow: "1",
              display: {
                xs: "none",
                md: "flex",
              },
              ml: "10%",
              gap: {
                md: "10px",
              },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                style={{ textDecoration: "none" }}
                to={page === "Home" ? "/" : "/" + page}
              >
                <Button
                  sx={{ my: 2, color: "secondary.main", display: "block", textAlign: "center", fontFamily: "League Spartan", fontWeight: "600" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <SocialIcons />
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
