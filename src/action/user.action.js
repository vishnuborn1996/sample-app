import { actionType } from "../constants/actionType";

export const login = (payload) => {
  return {
    type: actionType.LOGIN_REQUEST, payload
  }
};
