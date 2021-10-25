import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const AuthHeader = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={10} md={10}>
              <img alt="authLogo" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AuthHeader;
