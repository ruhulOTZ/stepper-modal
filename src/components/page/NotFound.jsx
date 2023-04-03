import { Box } from "@mui/material";
import React from "react";
import UnderConstraction from "../../assets/images/underConstruction.svg";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 200px)",
        width: "100vw",
        display: "grid",
        placeContent: "center",
      }}
    >
      <img height={400} src={UnderConstraction} alt="" />
    </Box>
  );
};

export default NotFound;
