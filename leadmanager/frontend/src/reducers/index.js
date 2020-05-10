import { combineReducers } from "redux";
import leadsReducer from "./leads";
import errorsReducer from "./errors";

export default combineReducers({
  leadsReducer,
  errorsReducer,
});
