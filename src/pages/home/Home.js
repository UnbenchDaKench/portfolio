import React from "react";
import { Box, Typography } from "@mui/material";
import "./Home.scss";
import FadeIn from "../../components/fadeIn/FadeIn";

function Home() {
  return (
    <Box className="home-page" sx={{ color: "secondary.main" }}>
      <FadeIn delay={3}>
      <Box
        className="intro-section"
        sx={{
          width: {
            xs: "80%",
            md: "50%",
          },
          height: {
            xs: "20%",
            md: "30%",
          },
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Typography className="" variant="h4">
          Hey this is Abé
        </Typography>
      </Box>
      </FadeIn>
    </Box>
  );
}

export default Home;
