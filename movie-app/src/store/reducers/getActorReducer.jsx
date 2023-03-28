import { createSlice } from "@reduxjs/toolkit";
import { getActorsAsync } from "../actions/actors";

const initialState = {
  actors: [],
  loading: false,
  error: null,
};

export const getActorSlice = createSlice({
  name: "allActors",
  initialState,
  extraReducers: {
    [getActorsAsync.pending]: (state) => {
      state.loading = true;
    },
    [getActorsAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getActorsAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.actors = payload;
    },
  },
});

export default getActorSlice.reducer;
