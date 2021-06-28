import { combineReducers } from "redux";
import HInfoReducer from "./HInfoReducer";

const rootReducer = combineReducers({
  Heroes: HInfoReducer,
});

export default rootReducer;
