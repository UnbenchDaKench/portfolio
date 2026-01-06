import React from 'react'
import { Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
  tap: {
    scale: 0.9,
  },
};

function SocialIcons() {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      sx={{
        display: 'flex',
      }}
    >
      <IconButton
        component={motion.button}
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
        sx={{ color: "secondary.main" }}
        onClick={() => window.open("https://github.com/unbenchdakench", "_blank")}
        aria-label="GitHub"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        component={motion.button}
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
        sx={{ color: "secondary.main", mr: "1em" }}
        onClick={() => window.open("https://linkedin.com/in/abiodun-oladoyin", "_blank")}
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  )
}

export default SocialIcons