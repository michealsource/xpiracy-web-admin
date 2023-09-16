import { createSlice } from "@reduxjs/toolkit";
import { statAction } from "../actions/statAction";
const initialState = {

  statStatus: "idle",
  statSuccess: "",
  statError: "",

  stat: {},
};

const statSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    clearStatStatus(state) {
      state.statStatus = "idle";
      state.statSuccess = "";
      state.statError = "";
    },
  },

  extraReducers: (builder) => {

    // ======SIGNING ADMIN STATUS ACTION=======//
    builder
      .addCase(statAction.pending, (state) => {
        state.statStatus = "loading";
      })
      .addCase(statAction.fulfilled, (state, { payload }) => {
        state.statStatus = "completed";
        // update redux state
        state.stat = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(statAction.rejected, (state, { payload }) => {
        state.statStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.statError = payload?.message;
      });

  },
});

export const {
    clearStatStatus
} = statSlice.actions;

export default statSlice.reducer;
