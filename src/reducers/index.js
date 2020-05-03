import { combineReducers } from "redux";
import { authentication } from "../reducers/authentication.reducer";

const rootReducer = combineReducers({
  authentication,
});

export default rootReducer;
