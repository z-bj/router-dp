import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route path="/tutorial" component={Tutorials} />
        <Route path="/community" component={Community} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
