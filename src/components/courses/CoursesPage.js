import React, { useEffect } from "react";
import CourseList from "./CourseList";
import { loadCourses } from "../../action/courses.action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  debugger;
  return {
    courses: state.courses.courses,
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
      <CourseList courses={props.courses} />
    </>
  );
};

// export default CoursesPage;
export default connect(mapStateToProps, { loadCourses })(CoursesPage);
