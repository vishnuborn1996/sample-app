import React from "react";
import LoginPage from "./login/LoginPage";

const App = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2"></div>
        <div className="col-lg-8 offset-lg-2">
          <LoginPage />
        </div>
      </div>
    </div>
  );
};

export default App;
