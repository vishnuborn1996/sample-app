import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login, logout } from "../../action/user.action";

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
    logout: () => {
      dispatch(logout());
    },
  };
};

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    props.logout();
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((credentials) => ({ ...credentials, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateCredentials()) return;
    if (credentials.email && credentials.password) {
      props.login(credentials);
    }
  };

  const validateCredentials = () => {
    const _errors = {};
    if (!credentials.email) _errors.email = "Email is required";
    if (!credentials.password) _errors.password = "Password is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  return (
    <div className="login-card">
      <h2>Login </h2>
      <LoginForm
        handleChange={handleChange}
        email={credentials.email}
        password={credentials.password}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(LoginPage);
