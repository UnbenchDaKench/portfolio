import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./Home.scss";
import FadeIn from "../../components/fadeIn/FadeIn";
import FloatingNav from "../../components/floatingNav/FloatingNav";
import { useAnimation, motion } from "framer-motion";

function Home({ handleHomePage, isHome }) {
  const [width, setWidth] = useState(window.innerWidth)
  const controls = useAnimation();
  useEffect(() => {
    console.log(width)
    // if(!isHome){
    handleHomePage(true);
    // }

    return () => {
      handleHomePage(false);
    };
  }, []);
  return (
    <Box className="home-page" sx={{ color: "secondary.main" }}>
      <FadeIn delay={4}>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "-25%", y: "-25%", opacity: 1, rotate: "-45deg" }}
          transition={{
            delay: 4,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(-45deg) ",
            display: {
              xs: "none",
              md: "block"
            },
            top: {
              md: "22%",
            },
            left: {
              md: "5%",
              lg: "20%",
            },
          }}
        >
          <FloatingNav>About</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "-25%", y: "-25%", opacity: 1, rotate: "-45deg" }}
          transition={{
            delay: 4,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(-45deg) ",
            display: {
              md: "none"
            },
            top: {
              xs: "22%",
              md: "22%",
            },
            left: {
              xs: "5%",
              md: "5%",
              lg: "20%",
            },
          }}
        >
          <FloatingNav>About</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: width >= 1200 ? "-80%" : "0%", y: "-25%", opacity: 1, rotate: "45deg" }}
          transition={{
            delay: 4.5,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(45deg) translate(-25%, -25%)",
            display: {
              xs: "none",
              md: "block"
            },
            top: {
              md: "25%",
            },
            right: {
              md: "0%",
              lg: "0%",
            },
            
          }}
        >
          <FloatingNav delay={0.2}>Experience</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: width >= 600 ? "5%" : "25%", y: "-25%", opacity: 1, rotate: "45deg" }}
          transition={{
            delay: 4.5,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(45deg) translate(-25%, -25%)",
            display: {
              md: "none"
            },
            top: {
              xs: "25%",
              md: "25%",
            },
            right: {
              xs: "0",
              md: "0%",
              lg: "0%",
            },
            left:{
              xs: "100"
            }
          }}
        >
          <FloatingNav delay={0.2}>Experience</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "-25%", y: "-25%", opacity: 1, rotate: "45deg" }}
          transition={{
            delay: 5.5,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(45deg) translate(-25%, -25%)",
            display: {
              xs: "none",
              md: "block"
            },
            top: {
              xs: "70%",
              md: "70%",
            },
            left: {
              xs: "0%",
              md: "5%",
              lg: "20%",
            },
          }}
        >
          <FloatingNav delay={0.4}>Projects</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "-25%", y: "-25%", opacity: 1, rotate: "45deg" }}
          transition={{
            delay: 5.5,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(45deg) translate(-25%, -25%)",
            display: {
              md: "none"
            },
            top: {
              xs: "70%",
              md: "70%",
            },
            left: {
              xs: "5%",
              md: "5%",
              lg: "20%",
            },
          }}
        >
          <FloatingNav delay={0.4}>Projects</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: width >= 1200 ? "-110%" : "0%", y: "-25%", opacity: 1, rotate: "-45deg" }}
          transition={{
            delay: 5,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(-45deg) translate(-25%, -25%)",
            display: {
              xs: "none",
              md: "block"
            },
            top: {
              md: "70%",
            },
            right: {
              md: "0%",
              lg: "3%",
            },
          }}
        >
          <FloatingNav delay={0.6}>Contact</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "0%", y: "-25%", opacity: 1, rotate: "-45deg" }}
          transition={{
            delay: 5,
            duration: 3,
            type: "spring",
            stiffness: 100, // Adjust for a bouncier effect
            damping: 10, // Adjust for a smoother or more damped bounce
          }}
          sx={{
            position: "fixed",
            // transform: "rotate(-45deg) translate(-25%, -25%)",
            display: {
              md: "none"
            },
            top: {
              xs: "70%",
            },
            right: {
              xs: "0%",
             
            },
          }}
        >
          <FloatingNav delay={0.6}>Contact</FloatingNav>
        </Box>
      </FadeIn>

      <FadeIn delay={3}>
        <Box
          className="intro-section"
          sx={{
            width: {
              xs: "80%",
              md: "300px",
            },
            height: {
              xs: "20%",
              md: "300px",
            },
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            // margin: "auto auto",
          }}
        >
          <Typography
            className=""
            variant="h4"
            sx={{
              color: "text.body",
              fontFamily: "League Spartan",
              fontWeight: "400",
            }}
          >
            Hey this is Abé
          </Typography>
        </Box>
      </FadeIn>
    </Box>
  );
}

export default Home;
