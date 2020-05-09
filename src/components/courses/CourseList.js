import React from "react";
const CourseList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            Title <i className="fa fa-fw fa-sort"></i>
          </th>
          <th>Author </th>
          <th>Technology</th>
        </tr>
      </thead>

      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.author}</td>
              <td>{course.technology}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseList;
