import React, { useState } from "react";
import "./Experience.scss";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Skills } from "../../data/skills/Skills";
import { motion } from "framer-motion";
import { ExperienceList } from "../../data/experience/Experience";
import { Certifications } from "../../data/certifications/Certifications";
import ExperienceSection from "../../sections/experienceSection/ExperienceSection";
import TabPanel from "../../components/tabPanel/TabPanel";

function Experience() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };
  return (
    <Box
      className="experience-page"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="skills-section">
        <Typography
          variant="h4"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: "left",
            ml: {
              xs: "5%",
            },
          }}
        >
          Key Skills
        </Typography>
        <Box component={motion.div}>
          <Paper
            className="key-skills"
            color="tertiary.main"
            elevation={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "90%" },
              ml: { xs: "5%" },
              backgroundColor: "primary.main",
            }}
          >
            <List
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: { xs: "100%" },
                fontFamily: "League Spartan",
                color: "text.body",
              }}
            >
              {Skills.map((skill) => (
                <ListItem
                  className="skills-list"
                  key={skill}
                  sx={{ width: { xs: "40%" } }}
                >
                  <ListItemButton>
                    <ListItemText primary={skill} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
      <Box className="certifications">
      <Typography
          variant="h4"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: "left",
            ml: {
              xs: "5%",
            },
          }}
        >
          Certifications
        </Typography>
        <Paper
          color="tertiary.main"
          elevation={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "90%" },
            ml: { xs: "5%" },
            backgroundColor: "primary.main",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xs: "90%",
                ml: { xs: "5%" },
                fontFamily: "League Spartan",
                color: "text.body",
              },
            }}
          >
            {Certifications.map((certification, index) => (
              <ListItem key={certification.name}>
                <ListItemText  sx={{color: "text.body",}} primary={`${certification.name}: ${certification.acquired} - ${certification.expiration}`}/>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
      <Box className="work-experience">
        <Typography
          variant="h4"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: "left",
            ml: {
              xs: "5%",
            },
          }}
        >
          Work Experience
        </Typography>
        <ExperienceSection />
      </Box>
    </Box>
  );
}

export default Experience;
