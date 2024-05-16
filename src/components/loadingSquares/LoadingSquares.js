import React from "react";
import { Box } from "@mui/material";

function LoadingSquares() {
  return (
    <Box
      className="loading"
      sx={{
        display: "flex",
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: "5vh",
            md: "10vh",
          },
          height: {
            xs: "5vh",
            md: "10vh",
          },
          border: "1px solid",
          borderColor: "tertiary.main",
          transform: "rotate(45deg)",
          animation: "expand 250ms linear forwards",
          animationDelay: "2s",
          "@keyframes expand": {
            xs: {
              "0%": {
                transform: "rotate(45deg) scale(1)",
              },
              "100%": {
                transform: "rotate(45deg) scale(14)",
              },
            },
            md: {
              "0%": {
                transform: "rotate(45deg) scale(1)",
              },
              "100%": {
                transform: "rotate(45deg) scale(12)",
              },
            },
          },
        }}
      >
        <Box
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
    </Box>
  );
}

export default LoadingSquares;
