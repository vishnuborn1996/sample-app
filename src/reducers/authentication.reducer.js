import { actionType } from "../constants/actionType";

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      debugger;
      return {
        loggingIn: true,
        user: action.user,
      };
    default:
      return state;
  }
}
