import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";

const GENRE = "authentication:GENRE";
const PLACEMENT = "authentication:PLACEMENT";
const COLLECTION = "authentication:COLLECTION";
const ALL_COLLECTION_DATA = "authentication:ALL_COLLECTION_DATA";
const ALL_USER_DATA = "authentication:ALL_USER_DATA";
const COMMUNITY = "authentication:COMMUNITY";
const COMMUNITY_PEOPLE_WATCHING = "authentication:COMMUNITY_PEOPLE_WATCHING";

export const getGenresAction = createAsyncThunk(
  GENRE,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("generic/genres");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUsersAction = createAsyncThunk(
  ALL_USER_DATA,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("admin/users");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPlacementAction = createAsyncThunk(
  PLACEMENT,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("generic/placements");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCollectionAction = createAsyncThunk(
    COLLECTION,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("admin/collection");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllCollectionDataAction = createAsyncThunk(
    ALL_COLLECTION_DATA,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("guest/dashboard");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCommunityAction = createAsyncThunk(
    COMMUNITY,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("admin/community");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCommunityPeopleWatchingAction = createAsyncThunk(
    COMMUNITY_PEOPLE_WATCHING,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().get("admin/community/what-people-are-watching");
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
