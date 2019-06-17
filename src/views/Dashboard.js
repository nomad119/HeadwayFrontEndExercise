import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ActiveTasksBar from "../Components/Dashboard/ActiveTasksBar";
import AppBar from "../Components/Dashboard/AppBar";
import WeekTasks from "../Components/Dashboard/WeekTasks";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f2f4f5"
  },
  days: {
    padding: theme.spacing(1, 1)
  }
}));
function Dashboard() {
  const classes = useStyles();
  const tasks = [
    {
      id: 123,
      project: "Birdseye Application",
      content: "V1Interview Scripts",
      date: Date.now(),
      time: "8:00am",
      isCompleted: false
    },
    {
      id: 1,
      project: "Birdseye Application",
      content: "Review Scripts",
      date: Date.now(),
      time: "8:00am",
      isCompleted: false
    },
    {
      id: 2,
      project: "Birdseye Application",
      content: "Customer Map",
      date: Date.now(),
      time: "8:00am",
      isCompleted: false
    }
  ];
  return (
    <Grid container direction="row" alignItems="flex-start">
      <Grid container item xs={3}>
        <Grid item xs>
          <ActiveTasksBar tasks={tasks} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        item
        xs={9}
        className={classes.root}
      >
        <Grid item>
          <AppBar />
        </Grid>
        <Grid container item className={classes.days}>
          <WeekTasks />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
