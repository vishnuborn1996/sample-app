import React, { useEffect } from "react";
import CourseList from "./CourseList";
import { loadCourses } from "../../action/courses.action";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";

const mapStateToProps = (state) => {
  debugger;
  return {
    courses: state.courses.courses,
    isLoading: state.courses.isLoading,
  };
};

const CoursesPage = (props) => {
  useEffect(() => {
    debugger;
    props.loadCourses();
  }, []);

  return (
    <>
      <h2>Courses</h2>
      {props.isLoading ? <Spinner /> : <CourseList courses={props.courses} />}
    </>
  );
};

// export default CoursesPage;
export default connect(mapStateToProps, { loadCourses })(CoursesPage);
