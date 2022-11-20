// third-party
import { createSlice } from "@reduxjs/toolkit";

// project imports
import axios from "axios";
import { dispatch } from "../index";

const initialState = {
  error: null,
  properties: [],
};

const slice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    addPropertySuccess(state, action) {
      state.properties = [action.payload, ...state.properties];
    },

    getPropertiesSuccess(state, action) {
      state.properties = action.payload;
    },

    getUserPropertiesSuccess(state, action) {
      state.properties = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export function addProperty(property) {
  return async () => {
    try {
      const response = await axios.post("/api/property", property);
      dispatch(slice.actions.addPropertySuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProperties() {
  return async () => {
    try {
      const response = await axios.get("/api/property");
      dispatch(slice.actions.getPropertiesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getUserProperties(email) {
  return async () => {
    try {
      const response = await axios.get(`/api/property?email=${email}`);
      dispatch(slice.actions.getUserPropertiesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
