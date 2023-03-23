import { configureStore } from "@reduxjs/toolkit";
import discoverMoviesReducer from "./reducers/discoverMoviesReducer";
import trendMoviesReducer from './reducers/trendMoviesReducer';

export const store = configureStore({
  reducer: {
    trendMovies: trendMoviesReducer,
    discoverMovies: discoverMoviesReducer,
  },
});
