import { actionType } from "../constants/actionType";
import { callApi, history } from "../utils/index";
import { endpoints } from "../constants/apiConstants";

export const login = (payload) => {
  return (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    callApi(endpoints.AUTH_URL, requestOptions).then(
      (response) => {
        debugger;
        const { json } = response;
        localStorage.setItem("user", JSON.stringify(json));
        dispatch(success(json));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(user) {
    return { type: actionType.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: actionType.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  return { type: actionType.LOGOUT };
};
