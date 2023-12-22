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

  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchArtists.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default artistsSlice.reducer;
