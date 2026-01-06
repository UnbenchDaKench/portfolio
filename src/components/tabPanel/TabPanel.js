import React from "react";
import { Box, List, Typography, ListItem, ListItemText } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      <AnimatePresence mode="wait">
        {value === index && (
          <motion.div
            key={index}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box sx={{ p: 3 }}>
              <Typography
                component={motion.h5}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                variant="h5"
                sx={{
                  color: "text.body",
                  textAlign: "left",
                  fontWeight: "bold",
                  fontFamily: "League Spartan",
                }}
              >
                {props.experience.role}
              </Typography>
              <Typography
                component={motion.h6}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                variant="h6"
                sx={{
                  color: "tertiary.main",
                  textAlign: "left",
                  fontFamily: "League Spartan",
                }}
              >
                {props.experience.company}
              </Typography>
              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                sx={{
                  color: "text.body",
                  textAlign: "left",
                  fontFamily: "League Spartan",
                }}
              >
                {props.experience.date}
              </Typography>
              <List>
                {children.length != 0 &&
                  children.map((responsibility, i) => (
                    <ListItem
                      key={responsibility}
                      component={motion.li}
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      sx={{
                        color: "text.body",
                        textAlign: "left",
                        fontFamily: "League Spartan",
                        "::before": {
                          color: "#BFA181",
                          content: '"▹ "',
                          left: 0,
                          position: "absolute",
                        },
                      }}
                    >
                      <ListItemText
                        disableTypography={true}
                        primary={responsibility}
                      />
                    </ListItem>
                  ))}
              </List>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TabPanel;
