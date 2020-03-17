import * as actionType from "../actions/actionType";

const initialState = {
  name: "",
  department: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return state;
    case actionType.LOGOUT:
      return state;
    default:
      return state;
  }
};
