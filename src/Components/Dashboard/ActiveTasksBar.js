import React from "react";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  withStyles,
  Button
} from "@material-ui/core";
import TabContainer from "../../Containers/TabContainer";
import TaskList from "../../Containers/TaskList";
const useStyles = theme => ({
  root: {
    padding: theme.spacing(9, 8)
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
  }
});

class ActiveTasksBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "one"
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(event, newValue) {
    console.log("event", newValue);
    this.setState({ tabValue: newValue });
  }
  render() {
    const { classes, tasks } = this.props;
    return (
      <Grid container direction="column" justify="center">
        <Grid item className={classes.title}>
          <Typography variant="h4" color="primary">
            Tasks
          </Typography>
        </Grid>
        <Grid container>
          <div className={classes.mainMenu}>
            <Tabs
              value={this.state.tabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleTabChange}
            >
              <Tab value="one" label="All" wrapped />
              <Tab value="two" label="Projects" />
            </Tabs>
          </div>
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
        <Grid item>
          {this.state.tabValue === "one" && (
            <TaskList tabValue={this.state.tabValue} tasks={tasks} />
          )}
          {this.state.tabValue === "two" && (
            <TabContainer>Item Two</TabContainer>
          )}
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(useStyles)(ActiveTasksBar);
