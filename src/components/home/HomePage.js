import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    user: state.authentication.user,
  };
};

const HomePage = (props) => {
  const user = useSelector((state) => state.authentication);
  debugger;
  return (
    <>
      <h2>Home {props.user.name}</h2>
      <Link to="/login">Logout</Link>
    </>
  );
};

export default connect(mapStateToProps)(HomePage);
