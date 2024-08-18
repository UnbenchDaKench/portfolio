import React from "react";
import "./About.scss";
import { Box, Typography } from "@mui/material";

import DroppingImage from "../../components/droppingImage/DroppingImage";
import ProHeadshot from "../../images/pro headshot2.jpeg";
import { useAnimation, motion} from "framer-motion";


function About({ handleHomePage }) {
  
  return (
    <Box
      className="about-page"
      sx={{
        display: "flex",
        flexDirection: {
          xs:"column",
          lg:"row"
        },
        justifyContent: {md: "center"},
        alignItems: "center",
        mt: {
          xs: "3em",
          md: "0%"
        },
        mb: "1.5em"

      }}
    >
      <DroppingImage image={ProHeadshot} />
      <Box
      sx={{
        width: {
          xs: "100%",
          sm: "90%",
          md: "80%",
          lg: "60%",
          xl: "50%"
        },
        minHeight: {
          xs:"35em",
          sm:"30em",
          md:"25em"

        },
      }}
      >
      <Typography 
      variant="h1" 
      sx={{
        color:"tertiary.main",
        width: "90%",
        fontSize: "2.3em",
        fontFamily: "League Spartan",
        fontWeight: "900",
        mb: "0.5em"
      }}>
        A little bit about me,
      </Typography>
      
      <Box        
      >
        <Typography
        sx={{
          color:"text.body",
          width: "90%",
          fontSize: "1.2em",
          fontFamily: "League Spartan",
          fontWeight: "700",
          textAlign: "left",
          
          margin: "auto"
        }}
        >
          my name is Abiodun and I am a passionate full-stack developer currently based in Halifax Nova Scotia. And working full time for IBM Canada.
          <br/>
          <br/>
          I hold extensive experience in various web development frameworks and technologies,
          including React, Vue, and Angular for building vibrant and responsive UI's, while on the backend I am proficient in Java (spring boot), and Node.js (express).
          Through my experience with AWS and other cloud services coupled with these technologies, I have successfully deployed and managed cloud-based applications,
          ensuring their reliability and accessibility.    
          <br/>
          <br/>
          When I am not drowning myself in work, I enjoy going on fishing trips, especially to new spots I haven't tried. I also love video games, which with my line of work,
          means I am in front of a computer 90% of the time.


        </Typography>
      </Box>
      </Box>
    </Box>
  );
}

export default About;
