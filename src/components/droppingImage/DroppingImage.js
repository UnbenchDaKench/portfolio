import { Box } from '@mui/material';
import React from 'react'
import { motion } from "framer-motion";

function DroppingImage({image}) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      sx={{
        width: {
          xs: "15em"
        },
        height: {
          xs: "20em"
        },
        mb: "0.3em",
        ml: {
          lg: "1em"
        },
        overflow: "hidden",
        borderRadius: "25%",
      }}
    >
      <Box
        component={motion.img}
        src={image}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          imageRendering: "crisp-edges",
          borderRadius: "25%",
        }}
      />
    </Box>
  )
}

export default DroppingImage