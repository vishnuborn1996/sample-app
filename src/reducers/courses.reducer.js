import { actionType } from "../constants/actionType";

const initialState = {
  courses: [],
};

export function courses(state = initialState, action) {
  switch (action.type) {
    case actionType.LOAD_COURSES:
      debugger;
      return {
        courses: [...state.courses, ...action.courses],
      };
    default:
      return state;
  }
}
