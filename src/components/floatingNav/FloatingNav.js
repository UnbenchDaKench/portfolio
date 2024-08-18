import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FloatingNav({ children, delay }) {
  return (
    <Box
      component={motion.div}
      animate={["initial"]}
      variants={{
        shake: {
          rotate: [0, -10, 10, -10, 10, 0],
          scale: 1.1,
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
    >
      <motion.h2
      whileHover={["shake"]}
        variants={{
          shake: {
            rotate: [0, -10, 10, -10, 10, 0],
            scale: 1.1,
          },
        }}
        style={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
          fontWeight: "900",
          fontSize: "3.5em"
          
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "#BFA181" }}
          to={`/${children}`}
        >
          {children}
        </Link>
      </motion.h2>
    </Box>
  );
}

export default FloatingNav;
