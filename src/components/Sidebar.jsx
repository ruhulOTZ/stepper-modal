import { Box, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box component={"aside"} sx={{ background: "gray" }}>
      <Typography variant="h4">Demo Text</Typography>
    </Box>
  );
};

export default Sidebar;
