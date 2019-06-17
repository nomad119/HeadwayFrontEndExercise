import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import LoginPortal from "./views/LoginPortal";

function App() {
  return (
    <Router>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/login" component={LoginPortal} />
    </Router>
  );
}
export default App;
