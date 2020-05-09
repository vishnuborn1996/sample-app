import { actionType } from "../constants/actionType";
import { callApi, history } from "../utils/index";
import { endpoints } from "../constants/apiConstants";

export const loadCourses = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  debugger;
  return (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    };

    callApi(endpoints.COURSES_URL, requestOptions).then(
      (response) => {
        const { json } = response;
        dispatch(success(json));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(payload) {
    return { type: actionType.LOAD_COURSES, courses: payload };
  }
};
