import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
