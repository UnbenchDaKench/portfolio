import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

function pageClose() {
    const [width, setWidth] = useState(window.innerWidth)

  return (
    <Box
      component={motion.div}
      initial={{scale: width >= 900 ? 12 : 14}}
      animate={{scale: 0}}
      transition={{duration: 1}}
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
      }}
    ></Box>
  );
}

export default pageClose;
