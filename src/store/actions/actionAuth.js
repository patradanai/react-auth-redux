import * as actionType from "./actionType";
import axios from "axios";

export const actionLogin = msg => {
  return { type: actionType.LOGIN, response: msg };
};

export const actionLogout = msg => {
  return { type: actionType.LOGOUT, response: msg };
};
