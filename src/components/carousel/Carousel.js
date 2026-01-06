import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./Carousel.scss";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  center: {
    x: "0%",
    scale: 1,
    zIndex: 5,
    opacity: 1,
    filter: "brightness(1)",
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  left: {
    x: "-60%",
    scale: 0.75,
    zIndex: 2,
    opacity: 0.5,
    filter: "brightness(0.6)",
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  right: {
    x: "60%",
    scale: 0.75,
    zIndex: 2,
    opacity: 0.5,
    filter: "brightness(0.6)",
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  hidden: {
    x: "0%",
    scale: 0.5,
    zIndex: 0,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3,
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const getPosition = (index) => {
    const total = items.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleCardClick = (index) => {
    const position = getPosition(index);
    
    if (position === "center") {
      // Open link in new tab
      window.open(items[index].link, "_blank");
    } else if (position === "right") {
      handleNext();
    } else if (position === "left") {
      handlePrev();
    }
  };

  return (
    <Box className="carousel-container">
      <Box className="carousel-wrapper">
        {items.map((item, index) => {
          const position = getPosition(index);
          const isCenter = position === "center";
          
          return (
            <motion.div
              key={item.id}
              className={`carousel-card ${position}`}
              variants={cardVariants}
              initial="hidden"
              animate={position}
              onClick={() => handleCardClick(index)}
              whileHover={
                position !== "hidden"
                  ? { 
                      scale: position === "center" ? 1.02 : 0.78,
                      transition: { duration: 0.3 }
                    }
                  : {}
              }
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                className="carousel-image"
              />
              
              <Box className="carousel-overlay" />
            </motion.div>
          );
        })}
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="carousel-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              color: "text.body",
              fontFamily: "League Spartan",
              fontWeight: "700",
              textAlign: "center",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            {items[currentIndex].name}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

export default Carousel;
