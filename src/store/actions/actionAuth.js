import * as actionType from "./actionType";
import axios from "axios";

export const actionLogin = () => {
  return async dispatch => {
    // const response = await axios.post();
    // const feedback = await response.json();
    dispatch({ type: actionType.LOGIN, response: [] });
  };
};

export const actionLogout = () => {
  return async dispatch => {
    dispatch({ type: actionType.LOGOUT, response: [] });
  };
};
