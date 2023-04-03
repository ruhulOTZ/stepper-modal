import React, { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Styles from "./Sidebar.module.css";

import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {
  const [value, setValue] = useState([20, 80]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component={"aside"} p={3} className={Styles.sidebarWrapper}>
      <Box border={"1px solid #ddd"} borderRadius={"8px"}>
        <Box className={Styles.sidebarHeader}>
          <Typography fontSize={16} fontWeight={"bolder"}>
            FILTER PRODUCTS BY
          </Typography>
        </Box>

        <Box p={3} borderBottom={"1px solid #ddd"}>
          <TextField
            sx={{ mb: 3 }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            fullWidth
          />
          <Typography
            component={"p"}
            mb={1}
            variant="body"
            fontWeight={"bolder"}
          >
            PRICE RANGE
          </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>

        <Box p={3} borderBottom={"1px solid #ddd"}>
          <Typography
            component={"p"}
            mb={1.5}
            variant="body"
            fontWeight={"bolder"}
          >
            Product Types
          </Typography>

          <Stack spacing={1}>
            <Typography
              variant="body2"
              color={"gray"}
              sx={{ cursor: "pointer" }}
            >
              Car
            </Typography>
            <Typography
              variant="body2"
              color={"gray"}
              sx={{ cursor: "pointer" }}
            >
              Parts
            </Typography>
            <Typography
              variant="body2"
              color={"gray"}
              sx={{ cursor: "pointer" }}
            >
              Service
            </Typography>
          </Stack>
        </Box>

        <Box p={3}>
          <Typography
            component={"p"}
            mb={1.5}
            variant="body"
            fontWeight={"bolder"}
          >
            Brand Name
          </Typography>

          <Stack spacing={1}>
            <Typography
              variant="body2"
              color={"gray"}
              sx={{ cursor: "pointer" }}
            >
              Toyota
            </Typography>
            <Typography
              variant="body2"
              color={"gray"}
              sx={{ cursor: "pointer" }}
            >
              Honda
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
