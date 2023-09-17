import { createSlice } from "@reduxjs/toolkit";
import { statAction } from "../actions/statAction";
import { getAllCollectionDataAction, getCollectionAction, getCommunityAction, getCommunityPeopleWatchingAction, getGenresAction, getPlacementAction, getUsersAction } from "../actions/genericAction";
const initialState = {

  genreStatus: "idle",
  genreSuccess: "",
  genreError: "",

  placementStatus: "idle",
  placementSuccess: "",
  placementError: "",

  collectionStatus: "idle",
  collectionSuccess: "",
  collectionError: "",

  allCollectionDataStatus: "idle",
  allCollectionDataSuccess: "",
  allCollectionDataError: "",

  communityStatus: "idle",
  communitySuccess: "",
  communityError: "",

  communityPeopleWatchingStatus: "idle",
  communityPeopleWatchingSuccess: "",
  communityPeopleWatchingError: "",

  genres: [],
  placements: [],
  collections: [],
  allUsers: [],
  allCollectionData: {},
  community: {},
  communityPeopleWatching: [],
  commentUsers: [],
  comments: [],
};

const genericSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    clearGenreStatus(state) {
      state.genreStatus = "idle";
      state.genreSuccess = "";
      state.genreError = "";
    },
    setCommentsRecords(state, action) {
      state.commentUsers = action.payload.users;
      state.comments = action.payload.comments;
    },
    clearPlacementStatus(state) {
      state.placementStatus = "idle";
      state.placementSuccess = "";
      state.placementError = "";
    },
    clearCollectionStatus(state) {
      state.collectionStatus = "idle";
      state.collectionSuccess = "";
      state.collectionError = "";
    },
  },

  extraReducers: (builder) => {

    builder
      .addCase(getGenresAction.pending, (state) => {
        state.genreStatus = "loading";
      })
      .addCase(getGenresAction.fulfilled, (state, { payload }) => {
        state.genreStatus = "completed";
        // update redux state
        state.genres = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getGenresAction.rejected, (state, { payload }) => {
        state.genreStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.genreError = payload?.message;
    });

    builder
      .addCase(getUsersAction.pending, (state) => {
        // state.genreStatus = "loading";
      })
      .addCase(getUsersAction.fulfilled, (state, { payload }) => {
        state.genreStatus = "completed";
        // update redux state
        state.allUsers = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getUsersAction.rejected, (state, { payload }) => {
        // state.genreStatus = "failed";
        // state.genreError = payload?.message;
    });

    builder
      .addCase(getPlacementAction.pending, (state) => {
        state.placementStatus = "loading";
      })
      .addCase(getPlacementAction.fulfilled, (state, { payload }) => {
        state.placementStatus = "completed";
        // update redux state
        state.placements = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getPlacementAction.rejected, (state, { payload }) => {
        state.placementStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.placementError = payload?.message;
    });

    builder
      .addCase(getCollectionAction.pending, (state) => {
        state.collectionStatus = "loading";
      })
      .addCase(getCollectionAction.fulfilled, (state, { payload }) => {
        state.collectionStatus = "completed";
        // update redux state
        state.collections = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getCollectionAction.rejected, (state, { payload }) => {
        state.collectionStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.collectionError = payload?.message;
    });

    builder
      .addCase(getAllCollectionDataAction.pending, (state) => {
        state.allCollectionDataStatus = "loading";
      })
      .addCase(getAllCollectionDataAction.fulfilled, (state, { payload }) => {
        state.allCollectionDataStatus = "completed";
        // update redux state
        state.allCollectionData = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getAllCollectionDataAction.rejected, (state, { payload }) => {
        state.allCollectionDataStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.allCollectionDataError = payload?.message;
    });

    builder
      .addCase(getCommunityAction.pending, (state) => {
        state.communityStatus = "loading";
      })
      .addCase(getCommunityAction.fulfilled, (state, { payload }) => {
        state.communityStatus = "completed";
        // update redux state
        state.community = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getCommunityAction.rejected, (state, { payload }) => {
        state.communityStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.communityError = payload?.message;
    });

    builder
      .addCase(getCommunityPeopleWatchingAction.pending, (state) => {
        state.communityPeopleWatchingStatus = "loading";
      })
      .addCase(getCommunityPeopleWatchingAction.fulfilled, (state, { payload }) => {
        state.communityPeopleWatchingStatus = "completed";
        // update redux state
        state.communityPeopleWatching = payload?.payload;
        // console.log(payload, "gggggggg");
      })
      .addCase(getCommunityPeopleWatchingAction.rejected, (state, { payload }) => {
        state.communityPeopleWatchingStatus = "failed";
        // console.log(payload, "failllllllllll");
        state.communityPeopleWatchingError = payload?.message;
    });

  },
});

export const {
    clearGenreStatus,
    clearPlacementStatus,
    clearCollectionStatus,
    setCommentsRecords
} = genericSlice.actions;

export default genericSlice.reducer;
