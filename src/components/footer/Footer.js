import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Divider
        sx={{
          width: "100%",
          opacity: "0",
        //   marginTop: "200px",
        }}
      />
      <Box
        sx={{
          height: "100px",
          width: "100%",
        }}
      >
        <Box
          alignSelf="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "20px",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "10px", color: "text.body" }}>
            Built and designed by Abiodun Oladoyin.
          </Typography>
          <Typography variant="p" sx={{ fontSize: "10px", color: "text.body" }}>
            All rights reserved. ©
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;