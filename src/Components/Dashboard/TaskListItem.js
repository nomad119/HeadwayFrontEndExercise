import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Typography,
  makeStyles
} from "@material-ui/core";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  completed: {
    fontWeight: 600,
    textDecoration: "line-through"
  },
  nCompleted: {
    fontWeight: 600,
    textDecoration: "none"
  },
  logos: {
    padding: theme.spacing(2, 0)
  },
  taskComplete:{
    opacity:'0.5'
  },
  taskNComplete:{
    opacity: 1
  }
}));

function TaskListItem({ id, content, project, date, time, isCompleted }) {
  const classes = useStyles();
  return (
    <ListItem key={id} className={isCompleted? classes.taskComplete: classes.taskNComplete}>
      <ListItemIcon>
        <Checkbox edge="start" />
      </ListItemIcon>
      <ListItemText
        disableTypography
        className={isCompleted ? classes.body1 : null}
      >
        <Typography variant="caption">{project}</Typography>
        <Typography
          variant="body1"
          className={isCompleted ? classes.completed : classes.nCompleted}
        >
          {content}
        </Typography>
      </ListItemText>
      <div>
        <Typography variant="caption" align="right">
          Today
        </Typography>
        <br />
        <Typography variant="caption" align="right">
          {time}
        </Typography>
      </div>
      <ListItemSecondaryAction>
        <IconButton color="primary" edge="end" aria-label="Comments">
          <ViewQuiltIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default TaskListItem;
