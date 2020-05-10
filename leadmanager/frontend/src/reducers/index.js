import { combineReducers } from "redux";
import leadsReducer from "./leads";
import errorsReducer from "./errors";
import messageReducer from "./message";

export default combineReducers({
  leadsReducer,
  errorsReducer,
  messageReducer,
});
