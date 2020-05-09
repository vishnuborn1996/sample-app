import React from "react";
import LoginPage from "./login/LoginPage";
import HomePage from "./home/HomePage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { history } from "../utils/history";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2"></div>
        <div className="col-lg-8 offset-lg-2">
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/courses" component={CoursesPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
