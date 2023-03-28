import { createSlice } from "@reduxjs/toolkit";
import { getTvShowsAsync } from "../actions/tvShows";

const initialState = {
  allTvShows: [],
  loading: false,
  error: null,
};

export const tvShowSlice = createSlice({
  name: "tvShows",
  initialState,
  extraReducers: {
    [getTvShowsAsync.pending]: (state) => {
      state.loading = true;
    },
    [getTvShowsAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getTvShowsAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allTvShows = payload;
    },
  },
});

export default tvShowSlice.reducer;