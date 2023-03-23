import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTrendMoviesAsync = createAsyncThunk(
  "trendMovies/getTrendMoviesAsync",
  async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d448aa11b683dfdce0641c3887f9a164"
      );
      return response?.data?.results;
    } catch (err) {
      return err.message;
    }
  }
);
