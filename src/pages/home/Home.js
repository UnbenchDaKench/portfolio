import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./Home.scss";
import FadeIn from "../../components/fadeIn/FadeIn";
import FloatingNav from "../../components/floatingNav/FloatingNav";
import { useAnimation, motion } from "framer-motion";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import Gif from "../../images/homepage animation.gif"
import zIndex from "@mui/material/styles/zIndex";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Home({ handleHomePage, isHome }) {
  // const [width, setWidth] = useState(window.innerWidth);
  const controls = useAnimation();

  const { height, width } = useWindowDimensions();
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

            translate: {
              md:"-18em",
              // xl: "-18em 8em"
            },
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
              // xs: "0em 0em",
              xs: height > 750 ? "0em 12vh" : "0em 0em",
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
            translate: {
              md:"18em -5em",
              // xl: "18em 4em"
            },
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
              xs: height > 750 ? "0em 12vh" : "0em 0em",
              // xs: "0em 0em",
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
            translate: {
              md:"-18em 20em",
              xl: "-18em 25em"
            },
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
              xs:height < 750 ? "0em 32.5vh" : "0em 45vh" ,
              // sm:"0em 30em"
              sm: height < 960 ? "0em 30em" : " 0em 55vh"
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
            translate: {
              md:"18em 15em",
              xl: "18em 20em"
            },
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
              // xs:"0em 40vh",
              xs: height < 750 ? "0em 32.5vh" : "0em 45vh",
              // sm:"0em 30em"
              sm: height < 960 ? "0em 30em" : " 0em 55vh"
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
            md: "450px",
          },
          height: {
            xs: "22%",
            sm: "30%",
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
        {/* <Typography
          className=""
          variant="h4"
          sx={{
            color: "text.body",
            fontFamily: "League Spartan",
            fontWeight: "400",
          }}
        >
          Hey I'm Abé
        </Typography> */}
        <Box
        component="img"
        src={Gif}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            // position: "absolute",
            // zIndex: 5
          }}
        />
        <SocialIcons/>
      </Box>

      
    </Box>
  );
}

export default Home;
