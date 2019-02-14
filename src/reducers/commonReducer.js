import createReducer from "./createReducer";
import { COMMON_REDEUSER,COMMON_ACTION } from "../Action/type";

let initialstate = {
  data: ""
};

export const commonReducer = createReducer(initialstate, {
  [COMMON_ACTION](state, action) {
    return Object.assign({}, state, {
      data: action.payload
    });
  }
});