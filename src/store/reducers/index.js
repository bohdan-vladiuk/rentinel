// third-party
import { combineReducers } from "redux";

// project import
import propertyReducer from "./property";
import contractReducer from "./contract";
import disputeReducer from "./dispute";
import userReducer from "./user";

const reducers = combineReducers({
  property: propertyReducer,
  contract: contractReducer,
  dispute: disputeReducer,
  user: userReducer,
});

export default reducers;
