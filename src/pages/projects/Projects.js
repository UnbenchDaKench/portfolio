import React from "react";
import "./Projects.scss";
import { Box, Divider, Typography } from "@mui/material";

import { ProjectsList } from "../../data/projects/ProjectsList";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

function Projects() {
  return (
    <Box
      className="projects-page"
      sx={{
        mt: {
          xs: "0%",
          sm: "0%",
          lg: "1em"
        },
        pt: "64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
      
      <Typography
        variant="h4"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: "3em",
          display: {
            md: "none",
            lg: "block",
            xl: "none"
          }
        }}
      >
        Past Work
      </Typography>
      <Typography
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
            xl: "block"
          }
        }}
      >
        Past Work
      </Typography>
      <Box
        className="commisions-section"
        sx={{
          width: {xs: "100%", md: "100%", lg: "75%"},
          height: {xs: "15em", sm: "25em", md: "32em"},
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
