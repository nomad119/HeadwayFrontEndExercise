import React from "react";
import { Grid, List, makeStyles, Divider } from "@material-ui/core";
import TaskListItem from "../Components/Dashboard/TaskListItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  imagez: {
    width: "100%",
    height: "100vh"
  },
  logos: {
    padding: theme.spacing(2, 0)
  },
  listItem: {
    padding: theme.spacing(1, 1)
  }
}));
function TaskList({ tabValue, tasks }) {
  const classes = useStyles();
  const taskListItems = tasks.map(task => {
    return (
      <div key={task.id}>
        <TaskListItem
          key={task.id}
          content={task.content}
          project={task.project}
          date={task.date}
          time={task.time}
          className={classes.listItem}
          isCompleted={task.isCompleted}
        />
        <Divider />
      </div>
    );
  });
  return (
    <Grid container>
      <List className={classes.root}>{taskListItems}</List>
    </Grid>
  );
}
TaskList.defaultProps = {
  tasks: []
};
export default TaskList;
