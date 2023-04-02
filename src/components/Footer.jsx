import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ paddingBlock: 2.5, backgroundColor: "#dadada" }}>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Column 1</Typography>
          <Typography variant="body2">Content for column 1</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Column 2</Typography>
          <Typography variant="body2">Content for column 2</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Column 3</Typography>
          <Typography variant="body2">Content for column 3</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Column 4</Typography>
          <Typography variant="body2">Content for column 4</Typography>
        </Grid>
      </Grid> */}

      <Typography textAlign="center">
        Copyright © 2023. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
