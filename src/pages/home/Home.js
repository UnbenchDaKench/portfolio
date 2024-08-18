import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./Home.scss";
import FadeIn from "../../components/fadeIn/FadeIn";
import FloatingNav from "../../components/floatingNav/FloatingNav";
import { useAnimation, motion } from "framer-motion";
import SocialIcons from "../../components/socialIcons/SocialIcons";

function Home({ handleHomePage, isHome }) {
  const [width, setWidth] = useState(window.innerWidth);
  const controls = useAnimation();
  useEffect(() => {}, []);
  return (
    <Box
      className="home-page"
      sx={{
        color: "secondary.main",
        
        maxHeight: {
          xs: "calc(100vh-15em)",
          md:"calc(100vh - 64px);"
        }
      }}
    >
      <FadeIn delay={4}>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, rotate: "-45deg" }}
          transition={{
            delay: 4,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            position: "relative",

            display: {
              xs: "none",
              md: "block",
            },

            translate: "-18em",
          }}
        >
          <FloatingNav>About</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "0%", y: "-25%", opacity: 1 }}
          transition={{
            delay: 4,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            display: {
              md: "none",
            },
            margin: "auto",
            translate: {
              xs: "0em 0em",
              sm: "0em 6em"
            }

          }}
        >
          <FloatingNav>About</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, rotate: "45deg" }}
          transition={{
            delay: 4.5,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            position: "relative",

            display: {
              xs: "none",
              md: "block",
            },
            translate: "18em -5em",
          }}
        >
          <FloatingNav delay={0.2}>Experience</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "0%", y: "-25%", opacity: 1 }}
          transition={{
            delay: 4.5,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            display: {
              md: "none",
            },
            margin: "auto",
            translate: {
              xs: "0em 0em",
              sm: "0em 6em"
            }
          }}
        >
          <FloatingNav delay={0.2}>Experience</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, rotate: "45deg" }}
          transition={{
            delay: 3.5,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            position: "relative",

            display: {
              xs: "none",
              md: "block",
            },
            translate: "-18em 20em",
          }}
        >
          <FloatingNav delay={0.4}>Projects</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "0%", y: "-25%", opacity: 1 }}
          transition={{
            delay: 3.5,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            alignSelf: "center",
            display: {
              md: "none",
            },
            margin: "auto",
            translate: {
              xs:"0em 15em",
              sm:"0em 30em"
            }
          }}
        >
          <FloatingNav delay={0.4}>Projects</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, rotate: "-45deg" }}
          transition={{
            delay: 3,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            position: "relative",

            display: {
              xs: "none",
              md: "block",
            },
            translate: "18em 15em",
          }}
        >
          <FloatingNav delay={0.6}>Contact</FloatingNav>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ x: "0%", y: "-25%", opacity: 1 }}
          transition={{
            delay: 3,
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          sx={{
            display: {
              md: "none",
            },
            margin: "auto",
            translate: {
              xs:"0em 15em",
              sm:"0em 30em"
            }

          }}
        >
          <FloatingNav delay={0.6}>Contact</FloatingNav>
        </Box>
      </FadeIn>
      <Box
        className="intro-section"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 1,
          stiffness: 100,
          damping: 10,
          ease: "easeIn",
        }}
        sx={{
          width: {
            xs: "80%",
            md: "300px",
          },
          height: {
            xs: "20%",
            md: "300px",
          },
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
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
          Hey I'm Abé
        </Typography>
        <SocialIcons/>
      </Box>

      
    </Box>
  );
}

export default Home;
