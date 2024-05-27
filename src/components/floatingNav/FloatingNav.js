import React from "react";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FloatingNav({ children, delay }) {

   

  return (
    <motion.div
      animate={["initial"]}
      whileHover={["shake"]}
      variants={{
        grow: {
          scale: 1.1,
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
            // delay,
            duration: 1,
            repeat: Infinity,
            // repeatDelay: 0.2,
            // repeatType: "reverse"
          },
        },
        shake: {
          //   x: [0, -10, 10, -10, 10, 0], // X-axis positions for the shaking effect
          //   y: [0, 10, -10, 10, -10, 0],
          rotate: [0, -10, 10, -10, 10, 0],
          scale: 1.1,
          transition: {
            duration: 0.5, // Duration of the shaking effect
            ease: "easeInOut",
          },
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
      <Typography
        variant="h2"
        sx={{
          color: "tertiary.main",
          fontFamily: "League Spartan",
              fontWeight: "900",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "#BFA181" }}
          to={`/${children}`}
        >
          {children}
        </Link>
      </Typography>
    </motion.div>
  );
}

export default FloatingNav;
