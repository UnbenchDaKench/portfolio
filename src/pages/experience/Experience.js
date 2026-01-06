import React, { useState, useRef } from "react";
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
import { motion, useInView } from "framer-motion";
import { Certifications } from "../../data/certifications/Certifications";
import ExperienceSection from "../../sections/experienceSection/ExperienceSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Experience() {
  const [tab, setTab] = useState(0);
  const skillsRef = useRef(null);
  const certsRef = useRef(null);
  const titleRef = useRef(null);
  
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const certsInView = useInView(certsRef, { once: true, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

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
          ref={titleRef}
          component={motion.h2}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variant="h2"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: { xs: "center" },
            ml: { md: "40%" },
            position: "sticky",
            display: { xs: "block", md: "none" },
          }}
        >
          Experience
        </Typography>
        <Typography
          ref={titleRef}
          component={motion.h1}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variant="h1"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: { xs: "left" },
            ml: { md: "40%" },
            position: "sticky",
            display: { xs: "none", md: "block" },
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
          component={motion.h4}
          variants={itemVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variant="h4"
          sx={{
            color: "tertiary.main",
            fontFamily: "League Spartan",
            fontWeight: "bold",
            textAlign: { xs: "left", md: "center" },
            width: "100%",
            ml: {
              xs: "10%",
              md: "0%",
            },
          }}
        >
          Key Skills~
        </Typography>
        <Box
          ref={skillsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          <Paper
            className="key-skills"
            color="tertiary.main"
            elevation={10}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "18em" },
              ml: { xs: "2.5%" },
              backgroundColor: "primary.main",
              padding: "1em",
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
              {Skills.map((skill, index) => (
                <ListItem
                  component={motion.li}
                  custom={index}
                  variants={skillItemVariants}
                  className="skills-list"
                  key={skill}
                  sx={{ width: { xs: "50%" } }}
                >
                  <ListItemButton
                    component={motion.div}
                    whileHover="hover"
                    variants={skillItemVariants}
                  >
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
            ref={certsRef}
            component={motion.h4}
            variants={itemVariants}
            initial="hidden"
            animate={certsInView ? "visible" : "hidden"}
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
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={certsInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
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
                <ListItem
                  key={certification.name}
                  component={motion.li}
                  custom={index}
                  variants={itemVariants}
                >
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
