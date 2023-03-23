import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const discoverMoviesAsync = createAsyncThunk(
  "discoveredMovies/discoverMoviesAsync",
  async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );
      return response?.data?.results;
    } catch (err) {
      return err.message;
    }
  }
);
