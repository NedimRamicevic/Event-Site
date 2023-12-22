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
    [fetchArtists.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [fetchArtists.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchArtists.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default artistsSlice.reducer;
