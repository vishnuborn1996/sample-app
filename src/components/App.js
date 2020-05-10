import React from "react";
import LoginPage from "./login/LoginPage";
import HomePage from "./home/HomePage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { history } from "../utils/history";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
  return (
    <div className="">
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/courses" component={CoursesPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
