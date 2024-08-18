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
        // pt:{xs: "56px", sm:"64px", md: "86px"},
        pt: "64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: {xs: "center", lg: "inherit"},
        // gap: "1em"
      }}
    >
      
      <Typography
        variant="h4"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: "5em",
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
          // mt: {
          //   xs: "10%",
          //   sm:"2%",
          //   md:"2%"
          // },
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
      {/* <Typography
        variant="h4"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: {
            xs: "10%",
            md:"2%",
            lg: "5%"
          },
          display: {
            md: "none",
            lg: "block",
            xl: "none"
          }
        }}
      >
        Concepts
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: {
            xs: "10%",
            sm:"2%",
            md:"2%",
            xl: "3%"
          },
          display: {
            xs: "none",
            md: "block",
            lg: "none",
            xl: "block"
          }
        }}
      >
        Concepts
      </Typography> */}
      {/* <Typography
        variant="h4"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "bold",
          mt: {
            xs: "10%",
            sm:"2%",
            md:"2%",
            lg: "5%"
          },
          display: {
            xs: "none",
            md: "none",
            lg: "block"
          }
        }}
      >
        Concepts
      </Typography> */}
      {/* <Box
        className="concept-section"
        sx={{
          mt: {
            xs: "10px",
          },
          mb: {
            // xs: "10px"
          },
          width: {xs: "100%", md: "100%", lg: "75%"},
          height: {xs: "15em", sm: "25em", md: "32em", lg: "17em", xl: "20em"},
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Carousel items={Concepts} />
      </Box> */}
    </Box>
  );
}

export default Projects;
