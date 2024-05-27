import React, {useState} from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { ExperienceList } from '../../data/experience/Experience'
import TabPanel from '../../components/tabPanel/TabPanel';

function ExperienceSection() {
    const [tab, setTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };
  return (
    <Box sx={{
        maxWidth: {
          xs: "90%"
        },
        ml: {
          xs:"5%"
        }
        // bgcolor: 'background.paper'
      }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="work experience tabs"
          TabIndicatorProps={{
            style:{
              backgroundColor: "#BFA181",
              color: "#178582"
            }
          }}
          
          
        >
          {ExperienceList.map((experience, index) => (
            <Tab key={index} label={experience.company}sx={{
              color: "text.body",
              "&.Mui-selected": {
                color: "secondary.main"
              }
            }}>

            </Tab>
          ))}
        </Tabs>
        {ExperienceList.map((experience, index) => (
            <TabPanel key={index} value={tab} index={index} experience={experience}>
                {experience.Responsibilities}
            </TabPanel>
        ))}
      </Box>
  )
}

export default ExperienceSection