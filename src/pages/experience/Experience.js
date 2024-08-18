import React, { useState } from "react";
import "./Experience.scss";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Skills } from "../../data/skills/Skills";
import { motion } from "framer-motion";
import { Certifications } from "../../data/certifications/Certifications";
import ExperienceSection from "../../sections/experienceSection/ExperienceSection";

function Experience() {
  const [tab, setTab] = useState(0);

  
  return (
    <Box
      className="experience-page"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        flexWrap: {
          xs: "nowrap",
          md: "wrap",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
      <Typography
          variant="h2"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: { xs: "center" },
            ml: { md: "40%" },
            position: "sticky",
            display: {xs: "block", md: "none"},
            
          }}
        >
          Experience
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: { xs: "left" },
            ml: { md: "40%" },
            position: "sticky",
            display: {xs: "none", md: "block"}
          }}
        >
          Experience
        </Typography>
      </Box>
      <Box
        className="skills-section"
        sx={{
          mt: {
            xs: "5%",
            md: "0%",
          },
          width: {
            md: "40%",
            xl: "30%"
          },
          ml: {
            // lg: "17%",
            xl: "5%"
          },
          height: {
            md: "100%",
          },
          position: { md: "fixed" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: {xs: "left", md: "center"},
            width: "100%",
            ml: {
              xs: "10%",
              md: "0%"
            },
          }}
        >
          Key Skills~
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
              width: { xs: "18em" },
              ml: { xs: "2.5%" },
              // justifySelf: "center",
              backgroundColor: "primary.main",
              padding: "1em"
            }}
          >
            <List
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: { xs: "100%" },
                fontFamily: "League Spartan",
                fontWeight: "bold",
                color: "text.body",
              }}
            >
              {Skills.map((skill) => (
                <ListItem
                  className="skills-list"
                  key={skill}
                  sx={{ width: { xs: "50%" } }}
                >
                  <ListItemButton>
                    <ListItemText disableTypography={true} primary={skill} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
      <Box
        className="body"
        sx={{
          width: { md: "60%" },
          ml: { md: "40%" },
        }}
      >
        <Box
          className="certifications"
          sx={{
            mt: {
              xs: "5%",
            },
            width: {
              md: "80%",
              xl: "70%",
            },
            // alignSelf: "center"
          }}
        >
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
            Certifications~
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
                },
                ml: { xs: "5%" },
                fontFamily: "League Spartan",
                fontWeight: "bold",
                color: "text.body",
              }}
            >
              {Certifications.map((certification, index) => (
                <ListItem key={certification.name}>
                  <ListItemText
                    disableTypography={true}
                    sx={{ color: "text.body" }}
                    primary={`${certification.name}: ${certification.acquired} - ${certification.expiration}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
        <Box
          className="work-experience"
          sx={{
            mt: {
              xs: "5%",
            },
            width: {
              md: "90%",
              xl: "70%"
            },
            // ml: {
            //   md: "40%"
            // }
            justifySelf: "center",
          }}
        >
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
            Work Experience~
          </Typography>
          <ExperienceSection />
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
