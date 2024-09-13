import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./Carousel.scss";

function Carousel({ items }) {
  const [checked, setChecked] = useState(1);

  const handleProjectClick = (id, link) => {
    setChecked(id);

    if (checked === id) {
      window.open(link, "_blank");
    }
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);
  return (
    <Box
      sx={{
        width: { xs: "100%" },

        height: "100%",
        transformStyle: "preserve-3d",
      }}
    >
      {items.map((item) => (
        <input
          key={item.id}
          id={`item-${item.id}`}
          type="radio"
          name={`${item.category}-carousel`}
          checked={checked === item.id ? true : false}
        />
      ))}
      <Box className="items">
        {items.map((item) => (
          <label
            key={item.id}
            id={`project-${item.id}`}
            htmlFor={`item-${item.id}`}
            className="item"
          >
            <Box
              component="img"
              src={item.image}
              onClick={() => handleProjectClick(item.id, item.link)}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "25px",
                // "&:hover": {
                //   opacity: checked === item.id ? "0.8" : "1",
                //   backgroundColor: "grey"
                // },

              }}
            />
            {checked === item.id && (
              <Box>
                
              </Box>
            )}
            {checked === item.id && (
              <Typography
                variant="h6"
                sx={{
                  color: "text.body",
                  mt: "20px",
                }}
              >
                {item.name}
              </Typography>
            )}
          </label>
        ))}
      </Box>
    </Box>
  );
}

export default Carousel;
