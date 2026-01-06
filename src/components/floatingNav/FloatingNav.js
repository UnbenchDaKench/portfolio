import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FloatingNav({ children, delay, fontSize = "3.5em", angle }) {
  const [isHovered, setIsHovered] = useState(false);

  // Continuous floating animation
  const floatingVariants = {
    float: {
      y: [-12, 12],
      x: [-8, 8],
      rotate: [-2, 2],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Enhanced hover animation
  const hoverVariants = {
    scale: 1.2,
    y: -10,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1], // Elastic ease
    },
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          delay: delay || 0,
          duration: 0.8,
          type: "spring",
          stiffness: 150,
          damping: 15,
        },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.div
        variants={floatingVariants}
        animate={isHovered ? {} : "float"}
        whileHover={hoverVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          position: "relative",
          cursor: "pointer",
          transformOrigin: "center center",
        }}
      >
        {/* Main text with gradient effect */}
        <motion.h2
          animate={{
            textShadow: isHovered
              ? "0 0 20px rgba(191, 161, 129, 0.8), 0 0 40px rgba(191, 161, 129, 0.4)"
              : "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "League Spartan",
            fontWeight: "900",
            fontSize: fontSize,
            margin: 0,
            textAlign: "center",
            whiteSpace: "nowrap",
            transformOrigin: "center center",
            color: "#BFA181",
            position: "relative",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              display: "inline-block",
              background: isHovered
                ? "linear-gradient(135deg, #D4AF76 0%, #BFA181 50%, #A68968 100%)"
                : "transparent",
              WebkitBackgroundClip: isHovered ? "text" : "unset",
              WebkitTextFillColor: isHovered ? "transparent" : "inherit",
              backgroundClip: isHovered ? "text" : "unset",
              color: "inherit",
            }}
            to={`/${children}`}
          >
            {children}
          </Link>
        </motion.h2>

        {/* Sparkle particles on hover */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                  x: Math.cos((i * Math.PI) / 3) * 50,
                  y: Math.sin((i * Math.PI) / 3) * 50,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "8px",
                  height: "8px",
                  background: "#D4AF76",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </Box>
  );
}

export default FloatingNav;
