// third-party
import { combineReducers } from "redux";

// project import
import propertyReducer from "./property";
import contractReducer from "./contract";

const reducers = combineReducers({
  property: propertyReducer,
  contract: contractReducer,
});

export default reducers;
