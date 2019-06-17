import React from "react";
import { makeStyles, withStyles, Typography, Grid } from "@material-ui/core";
import backg from "../img/Zig-Zag.svg";
import logo from "../img/birdseye_logo.png";
import AuthForm from "../Components/Auth/AuthForm";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(9, 8)
  },
  rightImage: {
    width: "100%",
    height: "100vh"
  },
  image: {
    width: 75,
    height: "auto"
  },
  portalAlign: {
    padding: theme.spacing(2, 0),
    marginBottom: 40
  }
}));

function LoginPortal() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={4} container elevation={6}>
        <Grid item className={classes.root}>
          <Grid item>
            <img
              className={[classes.logos, classes.image].join(" ")}
              alt="Birdseye_logo"
              src={logo}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.portalAlign} variant="h5">
              Welcome to Birdseye
            </Typography>
          </Grid>
          <AuthForm />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <img className={classes.rightImage} alt="login" src={backg} />
      </Grid>
    </Grid>
  );
}

export default withStyles(useStyles)(LoginPortal);
