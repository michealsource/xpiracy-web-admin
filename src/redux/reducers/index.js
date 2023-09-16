import { combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication";
import genericSlice from "./generic";
import statSlice from "./stat";

export default combineReducers({
  authenticationSlice,
  genericSlice,
  statSlice,
});
