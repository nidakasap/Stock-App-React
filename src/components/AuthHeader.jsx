import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h3" color="primary" align="center">
        Stock Management App
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
