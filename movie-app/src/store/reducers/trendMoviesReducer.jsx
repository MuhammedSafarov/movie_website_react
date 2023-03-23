import { createSlice } from "@reduxjs/toolkit";
import { getTrendMoviesAsync } from "../actions/trendMovies";

const initialState = {
  trendingMovies: [],
  loading: false,
  error: null,
};

export const trendMoviesSlice = createSlice({
  name: "trendMovies",
  initialState,
  extraReducers: {
    [getTrendMoviesAsync.pending]: (state) => {
      state.loading = true;
    },
    [getTrendMoviesAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getTrendMoviesAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.trendingMovies = payload;
    },
  },
});

export default trendMoviesSlice.reducer;
