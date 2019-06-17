import React from "react";
import logo from "../../img/birdseye_logo.png";
import { fade } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  InputBase,
  Link,
  Badge,
  makeStyles,
  AppBar
} from "@material-ui/core";
//import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
    display: "inline-flex"
  },
  menuItem: {
    padding: theme.spacing(0, 1)
  },
  aTag: {
    textDecoration: "underline",
    textDecorationColor: "white",
    color: "white"
  },
  logo: {
    width: 40,
    height: "auto",
    padding: theme.spacing(2)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    },
    margin: {
      margin: theme.spacing(1)
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.logo} src={logo} alt="Birdseye" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
            />
          </div>
          <div className={classes.rightToolbar}>
            <div className={classes.menuItem}>
              <Typography variant="subtitle1" className="white">
                <em>10 days left</em>
              </Typography>
            </div>
            <div>
              <Link href="#" variant="body1">
                <span className={[classes.aTag, classes.menuItem].join(" ")}>
                  Upgrade
                </span>
              </Link>
            </div>
            <div className={classes.menuItem}>
              <Badge color="secondary" variant="dot" className={classes.margin}>
                <SettingsIcon />
              </Badge>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
