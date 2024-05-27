import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

const scaleVariants = {
  in_and_out_small: {
    scale: [1, 14],
    borderWidth: "0.1px",
  },
  in_and_out_big: {
    scale: [1, 12],
    borderWidth: "0.1px",
  },
  pageTransitionSmall: {
    scale: [14, 1, 14],
    borderWidth: "0.1px",
  },
  pageTransitionBig: {
    // scale: [1, 12],
    borderWidth: "0.1px",
  },
};

const rotateVariants = {
  rotatingSquare: {
    rotate: 360,
  },
  rotatingSquareInner: {
    rotate: -720,
  },
};

function LoadingSquares() {
  const [width, setWidth] = useState(window.innerWidth);
  const controls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    console.log(width);
    console.log(location);
  }, [controls, location, width]);
  return (
    <Box
      className="loading"
      sx={{
        display: location.pathname === "/" ? "flex" : "none",
        minHeight: "100vh",
        justifyContent: "center",
        left: "50%",
        transform: "translate(-50%, 0)",
        alignItems: "center",
        zIndex: "1",
        position: "fixed",
      }}
    >
      <Box
        initial={{}}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: "30px",
            md: "50px",
          },
          height: {
            xs: "30px",
            md: "50px",
          },
          border: "1px solid",
          borderColor: "tertiary.main",
          animation: "rotating-square 2000ms linear forwards",
          // animationIterationCount: "2",

          "@keyframes rotating-square": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "99%": {
              transform: "rotate(360deg)",
            },
            "100%": {
              opacity: "0",
              display: "none",
            },
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "20px",
              md: "30px",
            },
            height: {
              xs: "20px",
              md: "30px",
            },
            border: "1px solid",
            borderColor: "tertiary.main",
            animation: "rotating-square-inner 2000ms linear forwards",

            "@keyframes rotating-square-inner": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "99%": {
                transform: "rotate(-720deg)",
              },
              "100%": {
                opacity: "0",
                display: "none",
              },
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default LoadingSquares;
