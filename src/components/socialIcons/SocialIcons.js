import React from 'react'
import { Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialIcons() {
  return (
    <Box 
        sx={{
            display: 'flex',
        }}
    >
        <IconButton sx={{color: "secondary.main"}} onClick={() => window.open("https://github.com/unbenchdakench")}>
            <GitHubIcon></GitHubIcon>
        </IconButton>
        <IconButton sx={{color: "secondary.main", mr: "1em"}}onClick={() => window.open("https://linkedin.com/in/abiodun-oladoyin")}>
            <LinkedInIcon></LinkedInIcon>
        </IconButton>
    </Box>
  )
}

export default SocialIcons