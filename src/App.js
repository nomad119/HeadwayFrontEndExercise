import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import LoginPortal from "./views/LoginPortal";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginPortal} />
      </Switch>
    </div>
  );
}
export default App;
