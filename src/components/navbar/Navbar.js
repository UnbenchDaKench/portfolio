import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About", "Experience", "Projects", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  useEffect(() => {}, []);
  const drawer = (
          
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",  backgroundColor: "primary.main", height: '100%', color: "secondary.main"}}>
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
        }}
      >
        <Toolbar disableGutters>
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
            <MenuIcon sx={{color: "secondary.main"}}/>
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
                  sx={{ my: 2, color: "secondary.main", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
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
