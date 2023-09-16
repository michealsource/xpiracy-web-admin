import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";

const STAT = "authentication:STAT";

export const statAction = createAsyncThunk(
  STAT,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("admin");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
