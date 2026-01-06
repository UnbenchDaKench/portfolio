import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SocialIcons from "../socialIcons/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const pages = ["Home", "About", "Experience", "Projects", "Contact"];

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const drawerVariants = {
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  useEffect(() => {}, []);
  const drawer = (
    <Box
      component={motion.div}
      variants={drawerVariants}
      initial="closed"
      animate="open"
      exit="closed"
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "primary.main",
        height: "100%",
        color: "secondary.main",
        pt: 4,
      }}
    >
      {pages.map((page, index) => (
        <motion.div
          key={page}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={drawerItemVariants}
        >
          <Link
            style={{ textDecoration: "none", width: "100%" }}
            to={page === "Home" ? "/" : "/" + page}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                my: 2,
                color: "secondary.main",
                display: "block",
                textAlign: "center",
                width: "100%",
                fontFamily: "League Spartan",
                fontWeight: "600",
              }}
            >
              {page}
            </Button>
          </Link>
        </motion.div>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="navbar"
        id="navbar"
        sx={{
          zIndex: "3",
          height: "64px",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
            component={motion.div}
            initial="hidden"
            animate="visible"
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
            {pages.map((page, index) => {
              const isActive = location.pathname === (page === "Home" ? "/" : "/" + page);
              return (
                <motion.div
                  key={page}
                  custom={index}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={page === "Home" ? "/" : "/" + page}
                  >
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        my: 2,
                        color: isActive ? "tertiary.main" : "secondary.main",
                        display: "block",
                        textAlign: "center",
                        fontFamily: "League Spartan",
                        fontWeight: "600",
                        position: "relative",
                        "&::after": isActive
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "60%",
                              height: "2px",
                              backgroundColor: "tertiary.main",
                            }
                          : {},
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
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
        <AnimatePresence>{mobileOpen && drawer}</AnimatePresence>
      </Drawer>
    </>
  );
}

export default Navbar;
