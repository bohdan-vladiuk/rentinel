// third-party
import { createSlice } from "@reduxjs/toolkit";

// project imports
import axios from "axios";
import { dispatch } from "../index";

const initialState = {
  error: null,
  users: [],
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getUsersSuccess(state, action) {
      state.users = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export function getUsers() {
  return async () => {
    try {
      const response = await axios.get("/api/user");
      dispatch(slice.actions.getUsersSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
