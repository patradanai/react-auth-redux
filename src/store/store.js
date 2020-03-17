import { combineReducers } from "redux";
import ReducerAuth from "./reducers/ReducerAuth";

export default combineReducers({
  auth: ReducerAuth
});
