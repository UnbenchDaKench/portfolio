import React from "react";
import "./About.scss";
import { Box, Typography } from "@mui/material";
import DroppingImage from "../../components/droppingImage/DroppingImage";
import ProHeadshot from "../../images/pro headshot.jpeg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

function About({ handleHomePage }) {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <Box
      className="about-page"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: { md: "center" },
        alignItems: "center",
        mt: {
          xs: "3em",
          md: "0%",
        },
        mb: "1.5em",
        pt: "64px",
      }}
    >
      <Box ref={imageRef}>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
        >
          <DroppingImage image={ProHeadshot} />
        </motion.div>
      </Box>
      <Box
        ref={textRef}
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%",
            lg: "60%",
            xl: "50%",
          },
          minHeight: {
            xs: "35em",
            sm: "30em",
            md: "25em",
          },
        }}
      >
        <Typography
          ref={titleRef}
          component={motion.h1}
          variants={textVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variant="h1"
          sx={{
            color: "tertiary.main",
            width: "90%",
            fontSize: "2.3em",
            fontFamily: "League Spartan",
            fontWeight: "900",
            mb: "0.5em",
          }}
        >
          A little bit about me,
        </Typography>

        <Box>
          <Typography
            component={motion.p}
            variants={textVariants}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            sx={{
              color: "text.body",
              width: "90%",
              fontSize: "1.2em",
              fontFamily: "League Spartan",
              fontWeight: "700",
              textAlign: "left",
              margin: "auto",
            }}
          >
            My name is Abiodun (Abé for short) and I am a passionate full-stack
            developer currently based in Halifax, Nova Scotia. And working full
            time for IBM Canada.
            <br />
            <br />
            I hold extensive experience in various web development frameworks
            and technologies, including React, Vue, and Angular for building
            vibrant and responsive UI's, while on the backend I am proficient in
            Java (spring boot), and Node.js (express). Through my experience
            with AWS and other cloud services coupled with these technologies, I
            have successfully deployed and managed cloud-based applications,
            ensuring their reliability and accessibility.
            <br />
            <br />
            When I am not drowning myself in work, I enjoy going on fishing
            trips, especially to new spots I haven't tried. I also love video
            games, which with my line of work, means I am in front of a computer
            90% of the time.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
