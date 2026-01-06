import React, { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { ExperienceList } from '../../data/experience/Experience'
import TabPanel from '../../components/tabPanel/TabPanel';
import { motion, AnimatePresence } from 'framer-motion';

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

function ExperienceSection() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };
  
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        maxWidth: {
          xs: "90%",
          lg: "100%"
        },
        ml: {
          xs: "5%",
        }
      }}
    >
      <Tabs
        component={motion.div}
        value={tab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="work experience tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#BFA181",
            color: "#178582"
          }
        }}
        sx={{
          "& .MuiTab-root": {
            transition: "all 0.3s ease",
          },
        }}
      >
        {ExperienceList.map((experience, index) => (
          <Tab
            key={index}
            label={experience.company}
            component={motion.div}
            custom={index}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            sx={{
              color: "text.body",
              fontFamily: "League Spartan",
              fontWeight: "900",
              "&.Mui-selected": {
                color: "secondary.main"
              }
            }}
          />
        ))}
      </Tabs>
      <AnimatePresence mode="wait">
        {ExperienceList.map((experience, index) => (
          <TabPanel key={index} value={tab} index={index} experience={experience}>
            {experience.Responsibilities}
          </TabPanel>
        ))}
      </AnimatePresence>
    </Box>
  )
}

export default ExperienceSection