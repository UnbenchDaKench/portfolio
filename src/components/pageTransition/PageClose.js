import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

function PageClose() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ scale: width >= 900 ? 12 : 14, opacity: 1 }}
      animate={{ scale: 0, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }}
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
        borderRadius: "50%",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
}

export default pageClose;
