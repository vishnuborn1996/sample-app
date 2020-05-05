import { actionType } from "../constants/actionType";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      debugger;
      return {
        loggingIn: true,
        user: action.user,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case actionType.LOGIN_FAILURE:
      return {};
    case actionType.LOGOUT:
      return {};
    default:
      return state;
  }
}
