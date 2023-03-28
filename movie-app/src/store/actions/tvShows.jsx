import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTvShowsAsync = createAsyncThunk(
  "tvShows/getTvShowsAsync",
  async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
      );
      return response?.data?.results;
    } catch (err) {
      return err.message;
    }
  }
);
