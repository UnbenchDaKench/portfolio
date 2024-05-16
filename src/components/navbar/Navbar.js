import React from "react";
import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home","About", "Experience", "Projects"];

function Navbar() {
  return (
    <AppBar
      sx={{
        zIndex: "3",
      }}
    >
      <Toolbar disableGutters>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: {
              md: "none",
            },
          }}
        >
          <MenuIcon />
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
            <Link key={page} style={{textDecoration: "none"}} to={page === "Home" ? "/" : "/" + page}>
              <Button sx={{ my: 2, color: "secondary.main", display: "block" }}>
                {page}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
