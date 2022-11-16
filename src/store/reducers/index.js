// third-party
import { combineReducers } from "redux";

// project import
import propertyReducer from "./property";

const reducers = combineReducers({
  property: propertyReducer,
});

export default reducers;
