import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ArtistService } from "../services/ArtistService";

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async () => {
    const response = ArtistService.getAll();
    return response;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArtists.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchArtists.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    },
    [fetchArtists.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    },
  },
});

export default artistsSlice.reducer;
