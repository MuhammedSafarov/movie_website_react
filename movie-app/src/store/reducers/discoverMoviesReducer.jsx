import { createSlice } from "@reduxjs/toolkit";
import { discoverMoviesAsync } from "../actions/discoverMovies";

const initialState = {
  discoveredMovies: [],
  loading: false,
  error: null,
};

export const discoverMoviesSlice = createSlice({
  name: "discoverMovies",
  initialState,
  extraReducers: {
    [discoverMoviesAsync.pending]: (state) => {
      state.loading = true;
    },
    [discoverMoviesAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [discoverMoviesAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.discoveredMovies = payload;
    },
  },
});

export default discoverMoviesSlice.reducer;
