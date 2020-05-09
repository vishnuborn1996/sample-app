import { combineReducers } from "redux";
import { authentication } from "../reducers/authentication.reducer";
import { courses } from "../reducers/courses.reducer";

const rootReducer = combineReducers({
  authentication,
  courses,
});

export default rootReducer;
