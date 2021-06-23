import { combineReducers } from "redux";

import showFreeda from "./showFreeda";
import callWorkBoard from "./callWorkBoard";

export default combineReducers({
  callWorkBoard,
  showFreeda,
});
