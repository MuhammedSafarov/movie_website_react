import { configureStore } from "@reduxjs/toolkit";
import discoverMoviesReducer from "./reducers/discoverMoviesReducer";
import trendMoviesReducer from "./reducers/trendMoviesReducer";
import tvShowReducer from "./reducers/tvShowReducer";
import getActorReducer from './reducers/getActorReducer';

export const store = configureStore({
  reducer: {
    trendMovies: trendMoviesReducer,
    discoverMovies: discoverMoviesReducer,
    tvShows: tvShowReducer,
    allActors: getActorReducer,
  },
});
