import { actionType } from "../constants/actionType";

const initialState = {
  courses: [],
  isLoading: true,
};

export function courses(state = initialState, action) {
  switch (action.type) {
    case actionType.LOAD_COURSES:
      return {
        courses: [...state.courses],
        isLoading: true,
      };
    case actionType.LOAD_COURSES_SUCCESS:
      debugger;
      return {
        courses: [...state.courses, ...action.courses],
        isLoading: false,
      };
    default:
      return state;
  }
}
