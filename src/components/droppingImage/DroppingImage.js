import { Box } from '@mui/material';
import React from 'react'
import { useAnimation, motion } from "framer-motion";

function DroppingImage({image}) {
  return (
    <Box
    component={motion.img}
    src={image}
    sx={{
        width: {
            xs: "15em"
        },
        height: {
            xs: "20em"
        },
        objectFit: "cover",
        objectPosition: "center",
        imageRendering: "crisp-edges",
        borderRadius: "25%",
        mb: "0.3em",
        ml: {
            lg: "1em"
          }
    }}
    >

    </Box>
  )
}

export default DroppingImage