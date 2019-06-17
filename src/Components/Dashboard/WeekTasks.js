import React from "react";
import { Grid } from "@material-ui/core";
import DayTask from "../Dashboard/DayTasks";

function WeekTasks(props) {
  const newDay = new Date()
  const today = new Date().toDateString().substring(3);
  newDay.setDate(newDay.getDate() +1)
  const tomorrow = newDay.toDateString().substring(3);
  const todayTask = [
    {
      id: 342,
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
      isCompleted: true
    }
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <DayTask day={today} tasks={todayTask} />
      </Grid>
      <Grid item xs={5}>
        <DayTask day={tomorrow} />
      </Grid>
    </Grid>
  );
}
export default WeekTasks;
