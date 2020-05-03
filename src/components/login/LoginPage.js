import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../action/user.action";

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((credentials) => ({ ...credentials, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (credentials.email && credentials.password) {
      props.login(credentials);
    }
  };

  return (
    <>
      <h2>Login </h2>
      <LoginForm
        handleChange={handleChange}
        email={credentials.email}
        password={credentials.password}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default connect(null, mapDispatchToProps)(LoginPage);
