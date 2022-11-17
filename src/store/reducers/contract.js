// third-party
import { createSlice } from "@reduxjs/toolkit";

// project imports
import axios from "axios";
import { dispatch } from "../index";

const initialState = {
  error: null,
  contracts: [],
};

const slice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    addContractSuccess(state, action) {
      state.contracts = [action.payload, ...state.contracts];
    },

    getContractsSuccess(state, action) {
      state.contracts = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export function addContract(contract) {
  return async () => {
    try {
      const response = await axios.post("/api/contract", contract);
      console.log(response.data);
      dispatch(slice.actions.addContractSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getContracts() {
  return async () => {
    try {
      const response = await axios.get("/api/contract");
      dispatch(slice.actions.getContractsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
