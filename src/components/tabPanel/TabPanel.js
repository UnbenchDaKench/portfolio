import React from "react";
import { Box, List, Typography, ListItem, ListItemText } from "@mui/material";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
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
              children.map((responsibility) => (
                <ListItem
                  key={responsibility}
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
                  <ListItemText disableTypography={true} primary={responsibility}></ListItemText>
                </ListItem>
              ))}
          </List>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
