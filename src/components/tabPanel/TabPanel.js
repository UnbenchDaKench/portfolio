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
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{color: "text.body",
            textAlign: "left",
            fontWeight: "bold"}}>
            {props.experience.role}
          </Typography>
          <Typography variant="h6" sx={{color: "tertiary.main",
            textAlign: "left"}}>
            {props.experience.company}
          </Typography>
          <Typography sx={{color: "text.body",
            textAlign: "left"}}>
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
                    "::before": {
                      color: "#BFA181",
                      content: '"▹ "',
                      left: 0,
                      position: "absolute",
                    },
                  }}
                >
                  <ListItemText primary={responsibility}></ListItemText>
                </ListItem>
              ))}
          </List>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
