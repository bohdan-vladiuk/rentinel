// third-party
import { createSlice } from "@reduxjs/toolkit";

// project imports
import axios from "axios";
import { dispatch } from "../index";

const initialState = {
  error: null,
  disputes: [],
};

const slice = createSlice({
  name: "disputes",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    addDisputeSuccess(state, action) {
      state.disputes = [action.payload, ...state.disputes];
    },

    getDisputesSuccess(state, action) {
      state.disputes = action.payload;
    },

    handleDisputeSuccess(state, action) {
      state.disputes = state.disputes.map((item) =>
        item._id !== action.payload._id ? item : action.payload
      );
    },
  },
});

// Reducer
export default slice.reducer;

export function addDispute(dispute) {
  return async () => {
    try {
      const response = await axios.post("/api/dispute", dispute);
      dispatch(slice.actions.addDisputeSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getDisputes() {
  return async () => {
    try {
      const response = await axios.get("/api/dispute");
      dispatch(slice.actions.getDisputesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function handleDispute(id, isApproved, adjusterEmail) {
  return async () => {
    try {
      const response = await axios.patch(`/api/dispute/${id}`, {
        isApproved,
        adjusterEmail,
      });
      dispatch(slice.actions.handleDisputeSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
