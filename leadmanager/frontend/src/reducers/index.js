import { combineReducers } from "redux";
import leadsReducer from "./leads";
import errorsReducer from "./errors";
import messageReducer from "./message";
import authReducer from "./auth";

export default combineReducers({
  leadsReducer,
  errorsReducer,
  messageReducer,
  authReducer,
});
