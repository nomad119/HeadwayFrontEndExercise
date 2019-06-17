import React from "react";
import { Grid, Typography, Button, makeStyles, Paper } from "@material-ui/core";
import TaskList from "../../Containers/TaskList";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1)
  },
  dayStyle: {
    padding: theme.spacing(2, 2),
    marginBottom: 40
  },
  title: {
    padding: theme.spacing(2, 4)
  },
  mainMenu: {
    padding: theme.spacing(0, 4)
  },
  bigButton: {
    height: 70,
    backgroundColor: "rgba(246,248,255,1)"
  },
  complete: {
    padding: theme.spacing(4, 2)
  }
}));

function DayTasks({ day, tasks }) {
  const classes = useStyles();
  const nCompletedTask = tasks.filter(task => !task.isCompleted);
  const completedTask = tasks.filter(task => task.isCompleted);
  return (
    <Grid container direction="column" justify="center">
      <Grid
        item
        container
        direction="column"
        justify="center"
        component={Paper}
      >
        <Grid item className={classes.dayStyle}>
          <Typography variant="h4" color="primary">
            {day === new Date().toDateString().substring(3)
              ? "Today"
              : "Tomorrow"}
          </Typography>
          <Typography variant="body1">{day}</Typography>
        </Grid>
        <Grid item>
          <Button
            size="large"
            className={classes.bigButton}
            fullWidth
            color="primary"
          >
            +Create Task
          </Button>
        </Grid>
        {nCompletedTask.length > 0 ? (
          <Grid item>
            <TaskList tasks={nCompletedTask} />
          </Grid>
        ) : null}
      </Grid>
      {completedTask.length > 0 ? (
        <Grid container direction="column" justify="center">
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            className={classes.complete}
          >
            <Typography>
              -------------- <i>Completed</i> --------------
            </Typography>
          </Grid>
          <Grid>
            <TaskList tasks={completedTask} />
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}
DayTasks.defaultProps = {
  tasks: []
};
export default DayTasks;
