import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getActorsAsync = createAsyncThunk(
  "allActors/getActorsAsync",
  async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/person/popular?api_key=d448aa11b683dfdce0641c3887f9a164&language=en-US&page=1"
      );
      return response?.data?.results;
    } catch (err) {
      return err.message;
    }
  }
);
