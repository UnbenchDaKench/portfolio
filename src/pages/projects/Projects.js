import React, { useRef } from "react";
import "./Projects.scss";
import { Box, Divider, Typography } from "@mui/material";
import { ProjectsList } from "../../data/projects/ProjectsList";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { motion, useInView } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

function Projects() {
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const carouselInView = useInView(carouselRef, { once: true, margin: "-100px" });

  return (
    <Box
      className="projects-page"
      sx={{
        mt: {
          xs: "0%",
          sm: "0%",
          lg: "1em",
        },
        pt: "64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        ref={titleRef}
        component={motion.h4}
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variant="h4"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: "3em",
          display: {
            md: "none",
            lg: "block",
            xl: "none",
          },
        }}
      >
        Past Work
      </Typography>
      <Typography
        ref={titleRef}
        component={motion.h3}
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variant="h3"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: "4em",
          display: {
            xs: "none",
            md: "block",
            lg: "none",
            xl: "block",
          },
        }}
      >
        Past Work
      </Typography>
      <Box
        ref={carouselRef}
        component={motion.div}
        variants={carouselVariants}
        initial="hidden"
        animate={carouselInView ? "visible" : "hidden"}
        className="commisions-section"
        sx={{
          width: { xs: "100%", md: "100%", lg: "75%" },
          height: { xs: "15em", sm: "25em", md: "32em" },
          mt: {
            xs: "1em",
          },
        }}
      >
        <Carousel items={ProjectsList} />
      </Box>
    </Box>
  );
}

export default Projects;
