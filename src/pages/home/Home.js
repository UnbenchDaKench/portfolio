import React from "react";
import { Box } from "@mui/material";
import "./Home.scss";
import FloatingNav from "../../components/floatingNav/FloatingNav";
import { motion } from "framer-motion";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import Gif from "../../images/homepage animation.gif";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// Navigation links configuration with diamond positions (diagonal arrangement)
const navLinks = [
  { name: "About", position: "top", angle: -45, delay: 0.2 },        // Top (diagonal)
  { name: "Experience", position: "right", angle: 45, delay: 0.3 },  // Right (diagonal)
  { name: "Projects", position: "bottom", angle: 135, delay: 0.4 },  // Bottom (diagonal)
  { name: "Contact", position: "left", angle: -135, delay: 0.5 },    // Left (diagonal)
];

function Home({ handleHomePage, isHome }) {
  const { height, width } = useWindowDimensions();
  
  // Responsive spacing for diamond positioning - diagonal distance from center
  const diamondSpacing = width < 768 ? (width < 600 ? 200 : 250) : 350;
  
  // Responsive font size for nav links - adjusted for better proportions
  const navFontSize = width < 768 ? (width < 600 ? "1.6em" : "2em") : "2.8em";
  
  // Calculate diamond positions (top, right, bottom, left on diagonals)
  const getPosition = (position) => {
    const positions = {
      top: { x: 0, y: -diamondSpacing },       // Top
      right: { x: diamondSpacing, y: 0 },      // Right
      bottom: { x: 0, y: diamondSpacing },     // Bottom
      left: { x: -diamondSpacing, y: 0 },      // Left
    };
    return positions[position];
  };

  return (
    <Box
      className="home-page"
      sx={{
        color: "secondary.main",
        maxHeight: {
          xs: "calc(100vh - 15em)",
          md: "calc(100vh - 64px)",
        },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Navigation Container - centered and handles circular positioning */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Floating Navigation Links - Diamond Pattern */}
        {navLinks.map((link, index) => {
          const { x, y } = getPosition(link.position);
          
          return (
            <Box
              key={link.name}
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                zIndex: 2,
                pointerEvents: "auto",
              }}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <FloatingNav 
                delay={2.8 + link.delay} 
                fontSize={navFontSize}
                angle={link.angle}
              >
                {link.name}
              </FloatingNav>
            </Box>
          );
        })}

        {/* Centered GIF Container */}
        <Box
          className="intro-section"
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.5,
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          sx={{
            position: "relative",
            width: {
              xs: width < 600 ? "60%" : "70%",
              sm: "400px",
              md: "450px",
            },
            height: {
              xs: width < 600 ? "200px" : "250px",
              sm: "280px",
              md: "300px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Box
            component={motion.img}
            src={Gif}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SocialIcons />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
