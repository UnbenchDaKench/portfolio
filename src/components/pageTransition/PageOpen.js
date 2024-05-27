import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";


function PageOpen() {
    const [width, setWidth] = useState(window.innerWidth)

  return (
    <Box
      component={motion.div}
      initial={{scale: 0}}
      animate={{scale: width >= 900 ? 12: 14, borderWidth: "0.1px"}}
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
  )
}

export default PageOpen